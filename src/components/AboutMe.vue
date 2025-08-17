<script lang="ts">
export default {
    methods: {
        minhaIdade() {
            let data = new Date();
            return data.getFullYear() - 1994;
        }
    }
}
</script>

<template>
    <div id="sobre" class="container mx-auto flex-col justify-center p-4">
        <div class="flex justify-center">
            <span class="font-nexal sm:text-4xl text-3xl p-4">Sobre Mim </span>
        </div>
        <div class="flex flex-wrap sm:flex-nowrap border-2 border-gray-500 rounded-md p-4 justify-center w-full">

            <div class="flex min-w-fit p-4 justify-center items-center">
                <img class="w-40 h-40 rounded-full border-2 border-gray-500" src="../../../public/images/walysson.webp"
                    alt="" srcset="">
            </div>
            <div class="flex p-4 text-justify font-nexal font-semibold">
                <p>
                    Olá! Eu sou Walysson dos Reis, engenheiro de computação e desenvolvedor web apaixonado por tecnologia. Ao longo da
                    minha carreira, desenvolvi uma mentalidade analítica e resolutiva que me permitiu superar inúmeros
                    desafios. Com uma curiosidade incessante, busco aprimorar-me e aplicar as últimas tendências no
                    desenvolvimento. Estou sempre pensando em contribuir para projetos inovadores, transformando
                    concepções em realidade e buscando equilíbrio entre eficiência e elegância no design de software.
                </p>
            </div>
        </div>
    </div>
</template>
