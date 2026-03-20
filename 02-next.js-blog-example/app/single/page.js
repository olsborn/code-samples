import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function SinglePostPage() {
  return (
    <>
      <div id="main">
        <article className="post">
          <header>
            <div className="title">
              <h2>
                <Link href="#">Magna sed adipiscing</Link>
              </h2>
              <p>Lorem ipsum dolor amet nullam consequat etiam feugiat</p>
            </div>
            <div className="meta">
              <time className="published">November 1, 2015</time>
              <Link href="#" className="author">
                <span className="name">Jane Doe</span>
                <Image src="/avatar.jpg" alt="" width={36} height={36} />
              </Link>
            </div>
          </header>
          <span className="image featured">
            <Image
              src="/pic01.jpg"
              alt="Magna sed adipiscing"
              width={840}
              height={340}
              style={{ objectFit: 'cover' }}
            />
          </span>
          <p>
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
            vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.
          </p>
          <p>
            Nunc quis dui scelerisque, scelerisque urna ut, dapibus orci. Sed
            vitae condimentum lectus, ut imperdiet quam. Maecenas in justo ut
            nulla aliquam sodales vel at ligula. Sed blandit diam odio, sed
            fringilla lectus molestie sit amet. Praesent eu tortor viverra lorem
            mattis pulvinar feugiat in turpis. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Fusce
            ullamcorper tellus sit amet mattis dignissim. Phasellus ut metus
            ligula. Curabitur nec leo turpis. Ut gravida purus quis erat
            pretium, sed pellentesque massa elementum. Fusce vestibulum porta
            augue, at mattis justo. Integer sed sapien fringilla, dapibus risus
            id, faucibus ante. Pellentesque mattis nunc sit amet tortor
            pellentesque, non placerat neque viverra.{' '}
          </p>
          <footer>
            <ul className="stats">
              <li>
                <Link href="#">General</Link>
              </li>
              <li>
                <Link href="#" className="icon solid fa-heart">
                  28
                </Link>
              </li>
              <li>
                <Link href="#" className="icon solid fa-comment">
                  128
                </Link>
              </li>
            </ul>
          </footer>
        </article>
      </div>
      <Footer />
    </>
  );
}
