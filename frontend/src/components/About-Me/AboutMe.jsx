import React from 'react';
import imageSrc from '/Images/Salih-Bak.jpg';

const AboutMe = () => {
    return (
        // <div>
        //   <h1>About Me</h1>
        //   <p>Hello! I am Salih Hakki Bak. I am the author for these books! I have completed my studies in ... at ... and I wish to help others now.</p>
        //   <img className="author-image" src={imageSrc} alt='Me' />
        // </div>
        <section id='about' class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
            <div class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
                <div class="flex flex-wrap ">
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <div class="relative lg:max-w-md">
                            <img src={imageSrc} alt="aboutimage" class="relative z-10 object-cover w-full rounded h-96" />
                            <div class="absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-blue-500 rounded shadow dark:border-blue-400 lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-black-300 dark:bg-gray-800 ">
                                <p class="text-lg font-semibold md:w-72">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute top-0 left-0 w-16 h-16 text-blue-700 dark:text-black-300 opacity-10" viewBox="0 0 16 16">
                                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                        </path>
                                    </svg> Enter a quote of yours here that is relevant to writing or teaching islam.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
                        <div class="pl-4 mb-6 border-l-4 border-blue-500 ">
                            <span class="text-sm text-gray-600 uppercase dark:text-gray-400">Who am I?</span>
                            <h1 class="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-300">
                                Salih Hakki Bak
                            </h1>
                        </div>
                        <p class="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                            SALIH HAKKI BAK was born in Trabzon, Turkiye. He completed his Bachelor of Theology at Samsun University, and later completed his Masters in Islamic History from the same University. He worked as a secondary school teacher in the department of national education in Turkiye for eight years.
                            <br></br><br></br>
                            In 1995, he obtained a master’s degree from Samsun’s 19 May University with a thesis on the life of one of the first Muslims; ‘Abu Ubayda Ibn Jarrah’.
                            <br></br><br></br>
                            Later, in 1998, he moved to Australia and acquired a diploma in secondary education from Victoria University in Melbourne. He has since taught a range of subjects from LOTE to Qur’an and Islamic Studies at a private Islamic College in Victoria.
                            <br></br><br></br>
                            He has well over 35 years of experience teaching Islamic Studies and Qur’an both abroad and in Australia. He also had coordination positions in Islamic Education for both primary and secondary schooling.
                            <br></br><br></br>
                            He was also appointed as head of Faith and Curriculum developer in his areas of expertise.
                            <br></br><br></br>
                            His published books are:
                            <br></br>
                            1. Fundamental Beliefs of Islam
                            <br></br>
                            2. Essential Beliefs & Practices in Islam
                            <br></br>
                            3. A Guide to Learn How to Read the Qur’an with Tajweed Rules
                            <br></br>
                            4. A Guide to Learn Tajweed Rules.
                            <br></br>
                            5. Arabic Writing and Reading Activity Boo
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;