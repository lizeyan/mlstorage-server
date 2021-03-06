<template>
  <b-container fluid style="padding-top: 15px" class="main-container">
    <b-row>
      <b-col>
        <b-input-group class="toolbar">
          <b-form-input v-model="itemFilter" type="text" size="sm"
                        placeholder="Enter your filter"></b-form-input>
        </b-input-group>

        <b-table v-if="filteredItems" striped hover small class="file-table"
                 :items="filteredItems" :fields="fields" primary-key="name" :sort-compare="sortCompare">
          <template v-slot:cell(itemType)="data">
            <v-icon v-if="data.value === 'parent'" name="folder"></v-icon>
            <v-icon v-else name="file"></v-icon>
          </template>

          <template v-slot:cell(name)="data">
            <b-link v-if="data.item.parent"
                    :to="`/${id}/browse${encodePath(parentPath)}`">{{ data.value }}</b-link>
            <a v-else :href="`/v1/_getzipentry/${id}${path}?arc_name=${encodePath(data.value)}`"
                      target="_blank">{{ data.value }}</a>
          </template>

          <template v-slot:cell(size)="data">
            <span v-if="data.item.size !== null">{{ fileSize(data.value) }}</span>
          </template>

          <template v-slot:cell(mtime)="data">
            <span v-if="data.item.mtime !== null">{{ formatDateTime(data.value) }}</span>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios';
import filesize from 'filesize';
import natsort from 'natsort';
import eventBus from '../libs/eventBus';
import { formatDateTime } from '../libs/utils';

const sorter = natsort({ insensitive: true });

export default {
  data () {
    return {
      itemFilter: '',
      items: null,
      fields: [
        {
          key: 'itemType',
          label: '',
          sortable: false,
          class: 'shrink'
        },
        {
          key: 'name',
          label: 'Name',
          sortable: true,
          class: 'expand'
        },
        {
          key: 'size',
          label: 'Size',
          sortable: true,
          class: 'shrink'
        },
        {
          key: 'mtime',
          label: 'Modify Time',
          sortable: true,
          class: 'shrink'
        }
      ],
      path: this.normalizePath(this.$route.params.path || '')
    };
  },

  mounted () {
    this.load(this.path);
    eventBus.addReloader(this.load);
  },

  destroyed () {
    eventBus.removeReloader(this.load);
  },

  computed: {
    id () {
      return this.$route.params.id;
    },

    filteredItems () {
      let sortArray = null;
      if (!this.items) {
        sortArray = [];
      } else {
        sortArray = this.items;
        if (this.itemFilter) {
          sortArray = sortArray.filter(
            s => s.name.toLowerCase().indexOf(this.itemFilter.toLowerCase()) >= 0);
        } else {
          sortArray = sortArray.map(s => s);
        }
        sortArray.sort((a, b) => -this.sortCompare(a, b));
      }
      sortArray = [{parent: true, name: '..', mtime: null, size: null}].concat(sortArray);
      return sortArray;
    },

    parentPath () {
      let parent = this.normalizePath(this.path + '/..');
      if (!parent.endsWith('/')) {
        parent += '/';
      }
      return parent;
    }
  },

  methods: {
    load (path) {
      path = path || this.path;
      eventBus.setLoadingFlag(true);
      axios.get(`/v1/_listzip/${this.id}${path}`)
        .then((resp) => {
          this.itemFilter = '';
          this.items = resp.data;
          this.path = path;
          eventBus.setLoadingFlag(false);
          eventBus.unsetError();
        })
        .catch((error) => {
          this.itemFilter = '';
          this.items = null;
          this.path = path;
          eventBus.setLoadingFlag(false);
          eventBus.setError({
            title: 'Failed to list zip',
            message: error.response ? error.response.statusText : error
          });
        });
    },

    sortCompare (a, b, key) {
      // field-specific order functions
      const getTypeOrder = () => {
        function g (x) {
          if (x.parent) {
            return 0;
          }
          return 1;
        }
        return g(a) - g(b);
      };
      const getNameOrder = () => sorter(a.name, b.name);
      const getSizeOrder = () => (a.size - b.size);
      const getMtimeOrder = () => (a.mtime - b.mtime);
      const getOrder = function (orderFunc) {
        for (let i = 0; i < orderFunc.length; ++i) {
          const order = orderFunc[i]();
          if (order !== 0) {
            return -order;
          }
        }
        return 0;
      };

      // compute the orders according to 'key'.
      if (key === 'size') {
        return getOrder([getTypeOrder, getSizeOrder, getNameOrder]);
      } else if (key === 'mtime') {
        return getOrder([getTypeOrder, getMtimeOrder, getNameOrder]);
      }
      return getOrder([getTypeOrder, getNameOrder]);
    },

    formatDateTime (timestamp) {
      return formatDateTime(timestamp, 'YYYY-MM-DD H:mm:ss');
    },

    fileSize (size) {
      return filesize(size);
    },

    normalizePath (path) {
      const segments = path.split('/');
      const ret = [];
      for (let i = 0; i < segments.length; ++i) {
        if (segments[i] === '..') {
          if (segments.length > 0) {
            ret.pop();
          }
        } else if (segments[i] !== '.' && segments[i] !== '') {
          ret.push(segments[i]);
        }
      }
      return '/' + ret.join('/');
    },

    encodePath (name) {
      return name.split('/').map(encodeURIComponent).join('/');
    }
  }
};
</script>

<style lang="scss">
  .main-container {
    height: 100%;
    overflow: auto;
  }
  .toolbar {
    margin-bottom: 10px;
  }
  .file-table {
    table {
      table-layout: fixed;
    }
    .shrink {
      white-space: nowrap;
    }
    .expand {
      width: 99%;
    }
  }
</style>
