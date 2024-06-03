import Head from "next/head";
import ShareButton from "./component/ShareButton";

export const metadata = {
  title: "test de prueba metadata",
  description: "Summary",
  images:
    "https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Other/1920x1080_lunar_newyear_2024_logo_901c70c0a6b0973136cc7a9ba1a00111.jpg",
  openGraph: {
    title: "test de prueba opengraph",
    description: "Summary",
    images:
      "https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Other/1920x1080_lunar_newyear_2024_logo_901c70c0a6b0973136cc7a9ba1a00111.jpg",
    url: "http://ec2-3-17-135-121.us-east-2.compute.amazonaws.com/akslasdaasd/kajsdadadas",
    type: "article",
  },
};

const BlogPost = () => {
  const post = {
    id: 1,
    title: "test de prueba blog",
    summary: "Summary",
    image:
      "https://staticfiles.warthunder.com/upload/image/0_Wallpaper_Renders/Other/1920x1080_lunar_newyear_2024_logo_901c70c0a6b0973136cc7a9ba1a00111.jpg",
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

        <div className="linkedin-share-button" style={{ display: "inline-block", marginLeft: "10px" }}>
          <a
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              pageUrl
            )}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(
              post.summary
            )}&source=${encodeURIComponent(pageUrl)}`}
            className="linkedin-xfbml-parse-ignore"
          >
            Compartir en LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
