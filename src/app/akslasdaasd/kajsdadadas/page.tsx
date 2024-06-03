import Head from "next/head";
import ShareButton from "./component/ShareButton";

const BlogPost = () => {
  const post = {
    id: 1,
    title: "test de prueba",
    summary: "Summary",
    image: "https://ammper-lomo-images.s3.us-east-2.amazonaws.com/imagenes/alcance3.png",
  };
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.summary} />
        <meta property="og:image" content={post.image} />
        <meta
          property="og:url"
          content={`http://ec2-3-17-135-121.us-east-2.compute.amazonaws.com/akslasdaasd/kajsdadadas`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.summary} />
        <meta name="twitter:image" content={post.image} />
      </Head>
      <div>
        <h1>{post.title}</h1>
        <p>{post.summary}</p>
        <img src={post.image} alt={post.title} />
        <ShareButton
          platform="facebook"
          url={`http://ec2-3-17-135-121.us-east-2.compute.amazonaws.comakslasdaasd/kajsdadadas`}
          title={post.title}
          image={post.image}
        />
        <ShareButton
          platform="linkedin"
          url={`http://ec2-3-17-135-121.us-east-2.compute.amazonaws.comakslasdaasd/kajsdadadas`}
          title={post.title}
          image={post.image}
        />
      </div>
    </>
  );
};

export default BlogPost;
