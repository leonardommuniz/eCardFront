<template>
  <!-- component -->
  <link
    rel="stylesheet"
    href="https://cdn.tailgrids.com/tailgrids-fallback.css"
  />

  <!-- ====== Table Section Start -->
  <section class="bg-white py-20 lg:py-[120px]">
    <div class="container">
      <div class="flex flex-wrap -mx-4 justify-center">
        <div class="w-3/4 px-4">
          <div class="max-w-full overflow-x-auto">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-primary text-center">
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent"
                  >
                    Identificador do Usuario
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                  >
                    Nome do Usuario
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody v-for="user of users" :key="user.id">
                <tr>
                  <td
                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"
                  >
                    {{ user.id }}
                  </td>
                  <td
                    class="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]"
                  >
                    {{ user.name }}
                  </td>
                  <td
                    class="space-x-0.5 text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]"
                  >
                    <button
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <svg class="h-4 w-4 text-white hover:text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                      </svg>
                    </button>
                    <router-link :to="{name: 'card', params:{userId: user.id}}">
                      <button
                        class="bg-blue-500 hover:bg-blue-700 hover:text-blue-500 text-white font-bold py-2 px-4 rounded"
                      >
                        <svg class="h-4 w-4 text-white hover:text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>

                      </button>
                    </router-link>
                    <button
                      @click="deleteUser(user.id)"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <svg class="h-4 w-4 text-white hover:text-blue-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Table Section End -->
</template>

<script>
import axios from 'axios'
import router from '../../router'
let token = sessionStorage.getItem('access_token');
const config = {
    headers: { Authorization: `Bearer ${token}` }
};
export default {
    name: 'TableCards',
    data() {
      return {
        users: [],
      }
    },
    
    created() {
      axios.get(
        `http://127.0.0.1:8000/api/card/card-user`,
        config
      )
      .then((response) => {
        console.log(response.data.data);
        this.users = response.data.data;
      })
    },
    methods: {
      deleteUser(id){
        axios.delete(`http://127.0.0.1:8000/api/user/${id}`);
        router.replace({ path: '/' })
      }
    }
  }
</script>
