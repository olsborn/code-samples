import Link from 'next/link';
import Image from 'next/image';

export default function MiniPost({
  title,
  link,
  date,
  authorImg,
  postImg,
  postImgAlt,
}) {
  return (
    <article className="mini-post">
      <header>
        <h3>
          <Link href={link}>{title}</Link>
        </h3>
        <time className="published">{date}</time>
        <Link href="#" className="author">
          <Image
            src={authorImg}
            alt=""
            width={36}
            height={36}
            style={{ objectFit: 'cover' }}
          />
        </Link>
      </header>
      <Link href={link} className="image">
        <Image
          src={postImg}
          alt={postImgAlt}
          width={350}
          height={176}
          style={{ objectFit: 'cover' }}
        />
      </Link>
    </article>
  );
}
