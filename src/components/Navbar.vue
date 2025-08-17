<script lang="ts">

export default {
    data() {
        return {
            menuSM: false,
        }
    },
    methods: {
        toggleMenuSM() {
            this.menuSM = !this.menuSM;
        },
        esconderMenuSM() {
            setTimeout(()=>{
                this.menuSM = false;
            },600)
        },
    }

}

</script>

<template>
    <div class="fixed flex w-full z-10">
    <nav class="flex flex-wrap sm:flex-nowrap w-full relative">
        <!-- Icone do Logo -->
        <div class="flex w-full bg-black border-b-2 border-white items-center pl-2">

            <div @click="toggleMenuSM" class="sm:hidden flex justify-center items-end h-fit active:scale-90 duration-75">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    class="w-7 h-7 stroke-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>

            </div>
            <div class="flex py-8 lg:px-8 justify-center lg:justify-start text-center w-full">

                <span
                    class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gradient-to-t  before:from-blue-100 before:to-blue-200 relative inline-block">
                    <span class="relative text-5xl justify-center font-jhetegral text-black">Walysson dos Reis</span>
                </span>
            </div>
        </div>
        <!-- Itens da Navbar -->
        <div id="menuNav" :class="{ 'hidden': menuSM == false }"
            class="absolute sm:relative sm:top-0 left-0 top-full sm:block justify-start p-4 w-48 sm:w-full items-center bg-black text-gray-500 border-white shadow-lg sm:shadow-none sm:border-b-2 rounded-br-md sm:rounded-none
            ">
            <ul class="flex flex-wrap sm:flex-nowrap w-full text-lg">
                <li
                    class="hover:scale-105 hover:bg-black hover:text-blue-300 hover:font-semibold duration-300 px-2 cursor-pointer p-1">
                    <a href="#menuNav" @click="esconderMenuSM">
                        <span class="italic font-nexal text-2xl align-middle pr-2">
                            &lt; &gt;
                        </span> inicio
                    </a>
                </li>
                <li
                    class="hover:scale-105 hover:bg-black hover:text-blue-300 hover:font-semibold duration-300 px-2 cursor-pointer p-1">
                    <a href="#sobre"  @click="esconderMenuSM">
                        <span class="italic font-nexal text-2xl align-middle pr-2">
                            &lt; &gt;
                        </span> sobre
                    </a>
                </li>
                <li
                    class="hover:scale-105 hover:bg-black hover:text-blue-300 hover:font-semibold duration-300 px-2 cursor-pointer p-1">
                    <a href="#habilidade"  @click="esconderMenuSM">
                        <span class="italic font-nexal text-2xl align-middle pr-2">
                            &lt; &gt;
                        </span>habilidade
                    </a>
                </li>
                <li
                    class="hover:scale-105 hover:bg-black hover:text-blue-300 hover:font-semibold duration-300 px-2 cursor-pointer p-1">
                    <a href="#contato"  @click="esconderMenuSM">
                        <span class="italic font-nexal text-2xl align-middle pr-2">
                            &lt; &gt;
                        </span> contato
                    </a>
                </li>
                <li
                    class="hover:scale-105 hover:bg-black hover:text-blue-300 hover:font-semibold duration-300 px-2 cursor-pointer p-1">
                    <a href="#social"  @click="esconderMenuSM">
                        <span class="italic font-nexal text-2xl align-middle pr-2">
                            &lt; &gt;
                        </span> social
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
</template>
