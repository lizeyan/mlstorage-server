<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">MLStorage</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="returnUri" exact>Dashboard</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav>
          <b-nav-item :to="`/${id}/`" exact>Experiment</b-nav-item>
          <b-nav-item :to="`/${id}/reports`" exact>Report</b-nav-item>
          <b-nav-item :to="`/${id}/figures`" exact>Figures</b-nav-item>
          <b-nav-item :to="`/${id}/console`" exact>Console</b-nav-item>
          <b-nav-item :to="`/${id}/browse/`">Browse</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="refresh">Reload</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <delayed-progress-bar class="fixed-top" z-index="9999"></delayed-progress-bar>

    <div class="main-wrapper">
      <error-box></error-box>
      <router-view v-if="doc" :doc="doc"
                   @update="updateDoc"
                   @delete="deleteDoc"
                   @kill="killDoc"
                   @updateStorageSize="updateStorageSize"></router-view>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DelayedProgressBar from '../components/DelayedProgressBar';
import ErrorBox from '../components/ErrorBox';
import eventBus from '../libs/eventBus';
import userConfig from '../libs/userConfig';

export default {
  components: {
    DelayedProgressBar,
    ErrorBox
  },

  data () {
    let returnUri = '/';
    if (userConfig.dashboard.lastPageId && userConfig.dashboard.lastPageId > 1) {
      returnUri += `page/${userConfig.dashboard.lastPageId}`;
    }
    if (userConfig.dashboard.lastQueryString) {
      returnUri += `?q=${userConfig.dashboard.lastQueryString}`;
    }
    return {
      doc: null,
      returnUri: returnUri
    };
  },

  computed: {
    id () {
      return this.$route.params.id;
    },

    name () {
      return this.doc && this.doc.name;
    }
  },

  mounted () {
    this.load();
    eventBus.addReloader(this.load);
    this._autoReloader = setInterval(() => this.load(), 120 * 1000);
  },

  destroyed () {
    if (this._autoReloader) {
      clearInterval(this._autoReloader);
      this._autoReloader = null;
    }
    eventBus.removeReloader(this.load);
  },

  methods: {
    refresh () {
      eventBus.callReloader();
    },

    setDoc (doc) {
      this.doc = doc;
      if (doc) {
        document.title = `${this.doc.name || this.doc.id} - MLStorage`;
      } else {
        document.title = 'Experiment - MLStorage';
      }
    },

    load () {
      eventBus.setLoadingFlag(true);
      axios.get(`/v1/_get/${this.id}?timestamp=1&strict=1`)
        .then((resp) => {
          eventBus.setLoadingFlag(false);
          eventBus.unsetError();
          this.setDoc(resp.data);
        })
        .catch((error) => {
          eventBus.setLoadingFlag(false);
          eventBus.setError({
            title: 'Failed to load the experiment',
            message: error.response ? error.response.statusText : error
          });
          this.setDoc(null);
        });
    },

    updateDoc (update) {
      if (update) {
        eventBus.setLoadingFlag(true);
        axios.post(`/v1/_update/${this.id}?timestamp=1&strict=1`, update)
          .then((resp) => {
            eventBus.setLoadingFlag(false);
            eventBus.unsetError();
            this.setDoc(resp.data);
          })
          .catch((error) => {
            eventBus.setLoadingFlag(false);
            eventBus.setError({
              title: 'Failed to load the experiment',
              message: error.response ? error.response.statusText : error
            });
            this.setDoc(null);
          });
      }
    },

    updateStorageSize () {
      eventBus.setLoadingFlag(true);
      axios.post(`/v1/_update_fs_size/${this.id}?timestamp=1&strict=1`, {})
        .then((resp) => {
          eventBus.setLoadingFlag(false);
          eventBus.unsetError();
          this.setDoc(resp.data);
        })
        .catch((error) => {
          eventBus.setLoadingFlag(false);
          eventBus.setError({
            title: 'Failed to load the experiment',
            message: error.response ? error.response.statusText : error
          });
          this.setDoc(null);
        });
    },

    deleteDoc () {
      eventBus.setLoadingFlag(true);
      axios.post(`/v1/_delete/${this.id}`)
        .then(() => {
          eventBus.setLoadingFlag(false);
          eventBus.unsetError();
          this.$router.push('/');
        })
        .catch((error) => {
          eventBus.setLoadingFlag(false);
          eventBus.setError({
            title: 'Failed to delete the experiment',
            message: error.response ? error.response.statusText : error
          });
          this.setDoc(null);
        });
    },

    killDoc () {
      eventBus.setLoadingFlag(true);
      axios.post(`/v1/_kill/${this.id}`)
        .then(() => {
          eventBus.setLoadingFlag(false);
          eventBus.unsetError();
          setTimeout(() => this.load(), 1000);
        })
        .catch((error) => {
          eventBus.setLoadingFlag(false);
          eventBus.setError({
            title: 'Failed to kill the experiment',
            message: error.response ? error.response.statusText : error
          });
        });
    }
  }
};
</script>

<style>
  .main-wrapper {
    padding-top: 56px;
    height: 100%;
  }
</style>
