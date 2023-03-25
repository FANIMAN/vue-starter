<template>
  <div class="p-6">
    <div class="flex justify-between">
      <div class="flex gap-2 font-bold">
        <router-link to="/">Open</router-link>
        <router-link to="/">Merged</router-link>
        <router-link to="/">Closed</router-link>
        <router-link to="/">All</router-link>
      </div>
      <div class="flex gap-2">
        <button class="p-1 border rounded-md border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
            <path
              fill="gray"
              d="M2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q.6 0 1.2.037t1.2.113l-1.5 2.9Q12.6 7 12.412 7H12Q9.1 7 6.562 8.088T2.1 11.1Zm4.25 4.25l-2.1-2.15q1.4-1.4 3.213-2.212t3.937-.938L9.8 13.3q-.975.3-1.85.813t-1.6 1.237Zm4.95 4.5q-.75-.275-1.163-1.038T10.1 17.3l6-12.2q.1-.2.288-.263t.412.013q.2.075.3.25t.05.4L13.9 18.65q-.2.825-1 1.15t-1.6.05Zm6.35-4.5q-.15-.15-.325-.3t-.375-.3l.8-3.15q.525.375 1.038.763t.962.837l-2.1 2.15Zm4.25-4.25q-.75-.75-1.612-1.375T18.45 8.6l.7-3q1.35.65 2.575 1.5T24 9l-2.1 2.1Z"
            />
          </svg>
        </button>
        <button class="p-1 border rounded-md border-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="gray" d="M2 20v2h20v-2h-9V5.83l5.5 5.5l1.42-1.41L12 2L4.08 9.92l1.42 1.41l5.5-5.5V20H2Z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="p-2 my-6">
      <div class="grid grid-cols-12">
        <div class="col-span-10">
          <div class="flex">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              Recent Searches
              <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search or filter results"
                required
              />
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="flex items-center ml-16">
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              type="button"
            >
              Created Date
              <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div class="relative w-full">
              <button
                class="flex-shrink-0 z-10 inline-flex items-center py-2 px-2 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    fill="gray"
                    d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m0 9c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m4.84-1.59c.34-.14.71-.24 1.08-.31l1.28-1.7C17.19 9.89 14.7 9 12 9s-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c1.78 0 3.44.5 4.84 1.41M20 16h-2v4h-2l3 3l3-3h-2v-4Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <ul class="">
        <li>
          <div v-for="(reqData, index) in reqDatas" :key="index" class="border border-gray-100 py-2">
            <div class="flex justify-between">
              <div>
                <p class="font-semibold">{{ reqData.title }}</p>
                <div class="flex gap-2">
                  <p class="font-extralight">!{{ reqData.id }}</p>
                  <span class="font-extralight flex gap-1">
                    <p>. Created</p>
                    <p>{{ whenCreated(reqData.created_at) }}</p>
                    <p>hour ago by {{ reqData.author.name }}</p>
                  </span>
                  <span v-for="(label, index) in reqData.labels" :key="index">
                    <p
                      class="hover"
                      :class="{
                        handbook: ['handbook'].includes(label),
                        teamScalability: ['team::Scalability'].includes(label),
                        productperation: ['Product Operations'].includes(label),
                        prodopsRelease: ['prodops:release'].includes(label),
                        productHandbook: ['product handbook'].includes(label),
                      }"
                    >
                      {{ label }}
                    </p>
                  </span>
                </div>
              </div>
              <div>
                <div class="flex gap-2 ml-10">
                  <svg v-if="reqData.has_conflicts === false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="green"
                      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4l8-8l-1.41-1.42Z"
                    />
                  </svg>
                  <svg v-else-if="reqData.has_conflicts === true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path
                      fill="red"
                      d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6L8.4 17Zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
                    />
                  </svg>
                  <img
                    v-for="(assigne, index) in reqData.assignees"
                    :key="index"
                    :src="assigne.avatar_url"
                    alt="image"
                    class="w-6 h-6 rounded-full"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="gray" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.2L4 17.2V4h16v12Z" />
                  </svg>
                </div>
                <span class="flex gap-1">
                  <p>updated</p>
                  <p>{{ whenCreated(reqData.created_at) }}</p>
                  <p>hours ago</p>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      reqDatas: [],
    }
  },

  computed: {
    ...mapState(['request']),
    ...mapGetters('request', ['getrequestData']),
  },

  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('request/fetchrequestData')
      this.reqDatas = this.$store.state.request.requestData
      console.log(this.reqDatas)
    },
    whenCreated(time) {
      var now = new Date()
      var then = new Date(time)
      var diffMs = now - then // milliseconds between now & then
      var diffHrs = Math.floor((diffMs % 86400000) / 3600000) // hours
      return diffHrs
    },
  },
}
</script>
<style scoped>
.handbook {
  @apply rounded-full px-2 bg-violet-200 text-black;
}
.teamScalability {
  @apply rounded-full px-2 bg-cyan-600 text-white;
}
.productperation {
  @apply rounded-full px-2 bg-fuchsia-600 text-white;
}
.prodopsRelease {
  @apply rounded-full px-2 bg-green-400  text-white;
}
.productHandbook {
  @apply rounded-full px-2 bg-blue-400 text-white;
}
.handbook {
  border: 1px solid rgb(71, 2, 2);
}
</style>
