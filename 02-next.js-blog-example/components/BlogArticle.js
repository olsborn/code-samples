import Image from 'next/image';
import Link from 'next/link';
export default function BlogArticle({
  title,
  subtitle,
  date,
  author,
  authorImg,
  postImg,
  postImgAlt,
  postLink,
  content,
  genre,
  likes,
  comments,
}) {
  return (
    <article className="post">
      <header>
        <div className="title">
          <h2>
            <Link href={postLink}>{title}</Link>
          </h2>
          <p>{subtitle}</p>
        </div>
        <div className="meta">
          <time className="published" dateTime={date}>
            {date}
          </time>
          <Link href="#" className="author">
            <span className="name">{author}</span>
            <Image src={authorImg} alt="{author}" width={32} height={32} />
          </Link>
        </div>
      </header>
      <Link href={postLink} className="image featured">
        <Image
          src={postImg}
          alt={postImgAlt}
          width={840}
          height={340}
          style={{ objectFit: 'cover' }}
        />
      </Link>
      <p>{content}</p>
      <footer>
        <ul className="actions">
          <li>
            <Link href={postLink} className="button large">
              Continue Reading
            </Link>
          </li>
        </ul>
        <ul className="stats">
          <li>
            <Link href="#">{genre}</Link>
          </li>
          <li>
            <Link href="#" className="icon solid fa-heart">
              {likes}
            </Link>
          </li>
          <li>
            <Link href="#" className="icon solid fa-comment">
              {comments}
            </Link>
          </li>
        </ul>
      </footer>
    </article>
  );
}
