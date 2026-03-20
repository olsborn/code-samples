import Link from 'next/link';
import Image from 'next/image';

export default function PostListItem({
  title,
  link,
  date,
  postImg,
  postImgAlt,
}) {
  return (
    <article>
      <header>
        <h3>
          <Link href={link}>{title}</Link>
        </h3>
        <time className="published">{date}</time>
      </header>
      <Link href={link} className="image">
        <Image
          src={postImg}
          alt={postImgAlt}
          width={50}
          height={50}
          style={{ objectFit: 'cover' }}
        />
      </Link>
    </article>
  );
}
