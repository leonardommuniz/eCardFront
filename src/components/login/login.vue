<template>
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
            <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="username"
            >
                Username
            </label>
            <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                v-model="userEmail"
                placeholder="Username"
            />
        </div>
        <div class="mb-6">
            <label
                class="block text-grey-darker text-sm font-bold mb-2"
                for="password"
            >
                Password
            </label>
            <input
                class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                v-model="userPassword"
                placeholder="*******"
            />
        </div>
        <div class="flex items-center justify-between">
            <button
                class="hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
                type="button"
                @click="login()"
            >
                Sign In
            </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Login',
    data(){
        return{
            userEmail:null,
            userPassword:null,
        }
    },
    methods: {
      login(){
        axios.post(
            `http://127.0.0.1:8000/api/login`,
            {
                "email": this.userEmail,
                "password":this.userPassword
            }
        ).then((res) =>{
            sessionStorage.setItem('access_token', res.data.access_token);
           
            this.$router.push('home') 
        }).catch(() =>{
            alert("Dados invalidos")
        }
            
        );
      }
    }
};
</script>