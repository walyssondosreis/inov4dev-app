<script lang="ts">

import axios from 'axios';

export default {
    data() {
        return {
            nome: "",
            email: "",
            mensagem: "",
            animaFormulario : false,
            enviouFormulario: false
        }
    },
    methods: {
        enviarEmail() {
            this.animaFormulario = true;
            // alert(`Meu nome é ${this.nome} <br> Meu Email é ${this.email} <br> Minha Mensagem é ${this.mensagem}`);
            const dadosFormulario = {
                nome: this.nome,
                email: this.email,
                mensagem: this.mensagem
            }

            axios.post('/enviar-email', { dadosFormulario })
                .then(response => {
                    // console.log(response.data);
                    this.nome = '';
                    this.email = '';
                    this.mensagem = '';
                    this.animaFormulario =false;
                    this.enviouFormulario = true;
                })
                .catch(error => {
                    console.error(error);
                    // Trate erros, se necessário
                });


        }
    }

}

</script>

<template>
    <div id="contato" class="container mx-auto flex justify-center flex-wrap sm:flex-nowrap p-4 my-10">
        <div class="flex sm:max-w-lg sm:order-2 sm:w-1/2 p-4">
            <span class="font-nexal sm:text-4xl text-3xl p-4">Tem alguma pergunta ou proposta, ou quer apenas dizer olá?
                Vá em
                frente! :) Respoderei assim que possível</span>
        </div>
        <form @submit.prevent="enviarEmail"
            class="relative flex-col p-4 justify-center border-2 border-black rounded-md sm:order-1 w-full sm:w-1/2">
            <!-- <input type="hidden" name="_token" :value="csrf"> -->
            <div class="flex-col p-2 justify-center">
                <label class="flex p-1 " for="nome_input">Nome</label>
                <input v-model="nome" class="flex p-2 rounded-md border-2 border-black w-full" type="text" pattern="\S.*"
                    title="Digite seu nome corretamente. Não pode haver espaços no início do nome" required>
            </div>
            <div class="flex-col  p-2 justify-center">
                <label class="flex  p-1" for="email_input">Email</label>
                <input v-model="email" class="flex  p-2 rounded-md border-2 border-black  w-full" type="email"
                    title="Digite seu email corretamente. O email deve ter o formado exemplo@meudominio.algumacoisa"
                    required>
            </div>
            <div class="flex-col p-2 justify-center">
                <label class="flex  p-1" for="mensagem_input">Mensagem</label>
                <textarea v-model="mensagem" class="flex  p-2 rounded-md border-2 border-black w-full" cols="" rows="5"
                    title="Digite uma mensagem válida" required></textarea>
            </div>
            <div class="flex p-2 justify-center">
                <button type="submit" class=" rounded-md px-10 py-1 border-black border-2"> Enviar</button>
            </div>
            <!-- Blur Azul -->
            <div v-show="animaFormulario || enviouFormulario"
                class="blur opacity-75 absolute top-0 left-0 h-full flex-col p-4 justify-center bg-blue-100 rounded-md w-full">
            </div>
            <!-- Icone de Carregando -->
            <div v-show="animaFormulario" class="absolute top-0 left-0 h-full flex-col p-4 justify-center rounded-md w-full">
                <div class="flex justify-center items-center h-full animate-spin duration-700 text-blue-400">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-36 h-36">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                </div>

            </div>
            <!-- Icone de V de Ok -->
            <div v-show="enviouFormulario" class="absolute top-0 left-0 h-full flex-col p-4 justify-center rounded-md w-full">
                <div class="flex justify-center items-center h-full animate-pulse text-blue-400">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-36 h-36">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </div>

            </div>
        </form>

    </div>
</template>
