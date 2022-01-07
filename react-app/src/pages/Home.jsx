import Card from "../components/Card";
import ImageContainer from "../components/ImageContainer";
import "../CSS/Home.css";
import content from "../content/forHome";
import { motion } from "framer-motion";

function Home() {
  let ids = ["a", "b", "c"];
  let i = 0;

  return (
    <div className="container-outer">
      <main className="main-container">
        <div className="image-main mb-20">
          <ImageContainer className="" />
        </div>

        <div className="introduction-content">
          <div className="row-header">
            <motion.h1
              initial={{ x: -200 }}
              transition={{ duration: 2 }}
              whileInView={{ translateX: 200 }}
              viewport={{ once: true }}
              className=""
            >
              {content[0].title}
            </motion.h1>
          </div>

          <div className="row-content">
            <motion.p
              initial={{ x: 100 }}
              transition={{ duration: 2 }}
              whileInView={{ translateX: -100 }}
              viewport={{ once: true }}
              className="row-content-text"
            >
              {content[0].body}
            </motion.p>
          </div>
        </div>

        <div className="philosophy-content">
          <div className="row-header">
            <motion.h1
              initial={{ x: -100 }}
              transition={{ duration: 2 }}
              whileInView={{ translateX: 100 }}
              viewport={{ once: true }}
              className=""
            >
              {content[1].title}
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 2 }}
            whileInView={{
              opacity: 1,
              scale: [0, 2, 1],
              rotate: [0, 0, 270, 270, 0],
            }}
            viewport={{ once: true }}
            className="shape"
          />

          <div className="row-content">
            <motion.p
              initial={{ x: 100 }}
              transition={{ duration: 2 }}
              whileInView={{ translateX: -100 }}
              viewport={{ once: true }}
              className="row-content-text"
            >
              {content[1].body}
            </motion.p>
          </div>
        </div>

        <div className="daily-program-content">
          <div className="row-header">
            <motion.h1
              initial={{ y: 300, opacity: 0 }}
              transition={{ duration: 2 }}
              whileInView={{ translateY: -300, opacity: 1 }}
              viewport={{ once: true }}
              className=""
            >
              {content[2].title}
            </motion.h1>
          </div>

          <div className="row-content">
            <motion.p
              initial={{ x: 200 }}
              transition={{ duration: 2 }}
              whileInView={{ translateX: -200 }}
              viewport={{ once: true }}
              className="row-content-text"
            >
              {content[2].body}
            </motion.p>
          </div>
        </div>

        {/* {content.map( (c) => {

                        return (
                            <Card id={ids[i++]} className="ind-card" content={c} />
                        )

                    })} */}
      </main>
    </div>
  );
}

export default Home;
