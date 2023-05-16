import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container m-auto lg:px-10 pt-2">
      <div className="flex justify-between">
        <div>LOGO</div>
        <input type="search" placeholder="Pesquisar" />
      </div>
      <nav className="bg-orange-600 mt-2 mb-6 px-6 flex justify-between  ">
        <a href="#">Página Inicial</a>
        <a href="#">Sobre Mim</a>
        <a href="#">Terapia Online</a>
        <a href="#">Meu Atendimento</a>
        <a href="#">Depoimentos</a>
        <a href="#">Perguntas Frequentes</a>
      </nav>
      <main>
        <div className="flex">
          <div className="mr-10">
            <p>
              Olá, prazer! Sou a Jessica Ferreira, psicóloga (CRP 11/11890) e
              especialista em Terapia Cognitivo Comportamental (TCC) com MBA em
              Gestão de Pessoas.
            </p>
            <br />
            <p>
              Realizo terapia online particular para adultos com foco nas
              Terapias Cognitivo Comportamentais. Também tenho vivência na área
              organizacional, o que amplia meu olhar para questões acerca do
              trabalho.
            </p>
            <br />
            <p>
              Acredito que podemos viver melhor olhando com mais gentileza para
              a nossa história, conectando-se com o que é importante para nós e
              promovendo mudanças saudáveis que nos façam crescer que sejam
              coerentes com os nossos valores.
            </p>
            <br />
            <p>
              Na terapia você pode compreende melhor a si mesmo e aprender a
              lidar com seus pensamentos e emoções mais difíceis, agindo assim
              com mais clareza, se relacionando melhor consigo e com os outros,
              enfrentando desafios e outras possiblidades que geram mais
              qualidade de vida.
            </p>
            <br />
            <p>
              E como psicoterapeuta espero te ajudar nesse caminho. Ficarei
              feliz em ajudar! Entre em contato e saiba mais :)
            </p>
            <button
              type="button"
              className="bg-green-700 rounded-lg p-2 mt-4 flex hover:bg-green-800 transition-all"
            >
              <FaWhatsapp size={22} color="white" />
              <span className="text-slate-200 pl-2"> Agende uma conversa</span>
            </button>
          </div>
          <div>
            <Image
              className="rounded-lg"
              src="/sobreMim.JPG"
              alt=""
              width="1100"
              height="100"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="flex justify-center mt-10 pt-2 border-t-4 border-t-indigo-900">
            Areas de Atuação
          </h1>
          <span className="flex justify-center">
            Tratamentos e demandas mais frequentes que atendo atualmente.
          </span>
          <div className="flex">
            <div className="border-4 border-indigo-400 p-20"></div>
            <div className="border-4 border-indigo-400 p-20"></div>
            <div className="border-4 border-indigo-400 p-20"></div>
            <div className="border-4 border-indigo-400 p-20"></div>
            <div className="border-4 border-indigo-400 p-20"></div>
            <div className="border-4 border-indigo-400 p-20"></div>
          </div>
        </div>
      </main>
    </div>
  );
}
