import Link from 'next/link';
import Image from 'next/image';
import logo from "../../assets/Ativo 11 1.png"; // Verifique o caminho da imagem


export default function TopBar() {
  return (
    <div className="absolute top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-2 py-4">
        {/* Logo */}
        <div className="flex items-center mt-2 ml-2">
          <Image
            src={logo}
            alt="Logo do Projeto"
            height={59}
            width={110}
            priority
          />
        </div>

        {/* Menu ou Ações */}
        <div className="flex-1 flex justify-center space-x-6">
          {/* Link para a Home */}
          <li>
            <Link href="/">Home</Link> {/* Vai para a página inicial */}
          </li>

          {/* Link para a Agenda */}
          <li>
            <Link href="/agenda">Agenda</Link> {/* Vai para a página inicial */}
          </li>

          {/* Botão de Mensagem (sem link) */}
          <button className="relative px-3 py-1 transition text-white hover:after:content-[''] after:block after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100">
            Mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
