<template>
  <div class=lastUpdated>
    <span>
        最終更新: {{ date }}
    </span>
  </div>
</template>

<script>
import {Octokit} from "@octokit/rest";

export default {
  props: {
    path: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      date: null
    }
  },
  created() {
      this.getLastUpdated()
  },
  methods: {
    async getLastUpdated() {
      const octokit = new Octokit()

      octokit.repos.listCommits({
          owner: 'Siroshun09',
          repo: 'Craftable',
          path: this.path,
          page: 1,
          per_page: 1
        })
        .then(({data}) => {
          var json = data[0]
          const dayjs = require('dayjs')
          var isoDate = json.commit.author.date
          this.date = dayjs(isoDate).locale('ja_jp').format('YYYY/MM/DD HH:mm')
        })
        .catch(error => {
            this.date = "Unknown"
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.lastUpdated {
    font-size: 1.0rem;
    text-align: right;
    color: $last-updated-date;
}
</style>
