import Head from "next/head";
import ShareButton from "./component/ShareButton";

export const metadata = {
  title: "test de prueba metadata",
  description: "Summary",
  images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvITHDJLczJs9Xi2iHkFulnuTxOzVoKEnysQ&s",
  openGraph: {
    title: "test de prueba opengraph",
    description: "Summary",
    images: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvITHDJLczJs9Xi2iHkFulnuTxOzVoKEnysQ&s",
    url: "http://ec2-3-17-135-121.us-east-2.compute.amazonaws.com/akslasdaasd/kajsdadadas",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "test de prueba twitter",
    description: "Summary",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvITHDJLczJs9Xi2iHkFulnuTxOzVoKEnysQ&s"],
  },
};

const BlogPost = () => {
  const post = {
    id: 1,
    title: "test de prueba blog",
    summary: "Summary",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvITHDJLczJs9Xi2iHkFulnuTxOzVoKEnysQ&s",
  };

  const pageUrl = `http://ec2-3-17-135-121.us-east-2.compute.amazonaws.com/akslasdaasd/kajsdadadas`;

  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={post.image} />
      </Head>
      <div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <img src={post.image} alt={post.title} />

        {/* Facebook SDK */}
        <div id="fb-root"></div>
        <script
          async
          defer
          // crossorigin="anonymous"
          src="https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v20.0"
          nonce="CdHdphvi"
        ></script>

        {/* Botón de compartir en Facebook */}
        <div className="fb-share-button" data-href={pageUrl} data-layout="button" data-size="large">
          <a
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&src=sdkpreparse`}
            className="fb-xfbml-parse-ignore"
          >
            Compartir
          </a>
        </div>

        <ShareButton platform="linkedin" url={pageUrl} title={post.title} image={post.image} />
      </div>
    </div>
  );
};

export default BlogPost;
