import Link from 'next/link';
import Image from 'next/image';
import BlogArticle from '@/components/BlogArticle';
import MiniPost from '@/components/MiniPost';
import PostListItem from '@/components/PostListItem';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <div id="main">
        <BlogArticle
          title="Magna sed adipiscing"
          subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat"
          date="2015-11-01"
          author="Jane Doe"
          authorImg="/avatar.jpg"
          postImg="/pic01.jpg"
          postImgAlt="Magna sed adipiscing"
          postLink="/single"
          content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
          genre="General"
          likes={28}
          comments={128}
        />
        <BlogArticle
          title="Ultricies sed magna euismod enim vitae gravida"
          subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat"
          date="2015-10-25"
          author="Jane Doe"
          authorImg="/avatar.jpg"
          postImg="/pic02.jpg"
          postImgAlt="Ultricies sed magna euismod enim vitae gravida"
          postLink="/single"
          content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper."
          genre="General"
          likes={28}
          comments={128}
        />
        <BlogArticle
          title="Euismod et accumsan"
          subtitle="Lorem ipsum dolor amet nullam consequat etiam feugiat"
          date="2015-10-22"
          author="Jane Doe"
          authorImg="/avatar.jpg"
          postImg="/pic03.jpg"
          postImgAlt="Euismod et accumsan"
          postLink="/single"
          content="Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Cras vehicula tellus eu ligula viverra, ac fringilla turpis suscipit. Quisque vestibulum rhoncus ligula."
          genre="General"
          likes={28}
          comments={128}
        />
        <ul className="actions pagination">
          <li>
            <Link href="" className="disabled button large previous">
              Previous Page
            </Link>
          </li>
          <li>
            <Link href="#" className="button large next">
              Next Page
            </Link>
          </li>
        </ul>
      </div>

      <section id="sidebar">
        <section id="intro">
          <Link href="#" className="logo">
            <Image src="/logo.jpg" alt="Logo" width={80} height={80} />
          </Link>
          <header>
            <h2>Future Imperfect</h2>
            <p>
              Another fine responsive site template by
              <Link href="http://html5up.net">HTML5 UP</Link>
            </p>
          </header>
        </section>

        <section>
          <div className="mini-posts">
            <MiniPost
              title="Vitae sed condimentum"
              link="/single"
              date="October 20, 2015"
              authorImg="/avatar.jpg"
              postImg="/pic04.jpg"
              postImgAlt="Vitae sed condimentum"
            />

            <MiniPost
              title="Rutrum neque accumsan"
              link="/single"
              date="October 19, 2015"
              authorImg="/avatar.jpg"
              postImg="/pic05.jpg"
              postImgAlt="Rutrum neque accumsan"
            />

            <MiniPost
              title="Odio congue mattis"
              link="/single"
              date="October 18, 2015"
              authorImg="/avatar.jpg"
              postImg="/pic06.jpg"
              postImgAlt="Odio congue mattis"
            />

            <MiniPost
              title="Enim nisl veroeros"
              link="/single"
              date="October 17, 2015"
              authorImg="/avatar.jpg"
              postImg="/pic07.jpg"
              postImgAlt="Enim nisl veroeros"
            />
          </div>
        </section>

        <section>
          <ul className="posts">
            <li>
              <PostListItem
                title="Lorem ipsum fermentum ut nisl vitae"
                link="/single"
                date="October 20, 2015"
                postImg="/pic08.jpg"
                postImgAlt="Lorem ipsum fermentum ut nisl vitae"
              />
            </li>
            <li>
              <PostListItem
                title="Convallis maximus nisl mattis nunc id lorem"
                link="/single"
                date="October 15, 2015"
                postImg="/pic09.jpg"
                postImgAlt="Convallis maximus nisl mattis nunc id lorem"
              />
            </li>
            <li>
              <PostListItem
                title="Euismod amet placerat vivamus porttitor"
                link="/single"
                date="October 10, 2015"
                postImg="/pic10.jpg"
                postImgAlt="Euismod amet placerat vivamus porttitor"
              />
            </li>
            <li>
              <PostListItem
                title="Magna enim accumsan tortor cursus ultricies"
                link="/single"
                date="October 8, 2015"
                postImg="/pic11.jpg"
                postImgAlt="Magna enim accumsan tortor cursus ultricies"
              />
            </li>
            <li>
              <PostListItem
                title="Congue ullam corper lorem ipsum dolor"
                link="/single"
                date="October 7, 2015"
                postImg="/pic12.jpg"
                postImgAlt="Congue ullam corper lorem ipsum dolor"
              />
            </li>
          </ul>
        </section>

        <section className="blurb">
          <h2>About</h2>
          <p>
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod amet placerat. Vivamus porttitor
            magna enim, ac accumsan tortor cursus at phasellus sed ultricies.
          </p>
          <ul className="actions">
            <li>
              <Link href="#" className="button">
                Learn More
              </Link>
            </li>
          </ul>
        </section>

        <Footer />
      </section>
    </>
  );
}
