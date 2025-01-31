import styles from './PossibilitySection.module.css';
import Image from 'next/image';

const PossibilitySection = () => {
  return (
    <section className={styles.possibility_sec} id="possibility_sec">
      <div className="container">
        <div className="sfdg">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h3 className={`${styles.heading} mt-0`}>
                Endless Opportunities Across Diverse Disciplines
              </h3>
            </div>
            <div className="col-md-12 text-center">
              <p>
                Rayat Bahra University Punjab has been recognized by the UGC under sections 2(f) and 12 (B) of the UGC Act, 1956, and by other bodies of the State and the Nation. The University has also been accredited with the prestigious “A++ Grade”
              </p>
            </div>
          </div>
        </div>

        <div className={styles.possib_gallery}>
          <div className="row">
            <div className="col-md-2 padding-5 mt-0" style={{ padding: '5px' }}>
              <div className={styles.posible_box}>
                <Image
                  src="/posible_1.png"
                  alt="Image 1"
                  width={300} 
                  height={900} 
                  layout="responsive"
                  objectFit="cover"
                  className={styles.bigImg}
                />
                <h4></h4>
              </div>
            </div>
            <div className="col-md-10 padding-5">
              <div className="row">
                <div className="col-md-3 padding-5" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_2.png"
                      alt="Image 2"
                      width={300} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
                <div className="col-md-6 padding-5" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_3.png"
                      alt="Image 3"
                      width={600} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
                <div className="col-md-3 padding-5" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_4.png"
                      alt="Image 4"
                      width={300} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-9 padding-5" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_5.png"
                      alt="Image 5"
                      width={900} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
                <div className="col-md-3 padding-5" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_6.png"
                      alt="Image 6"
                      width={300} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <div className={styles.posible_box2}>
                <Image
                  src="/posible_7.png"
                  alt="Image 7"
                  width={300} 
                  height={350} 
                  layout="responsive"
                  objectFit='cover'
                  className={styles.imgSmal_7}
                  
                />
                <h4></h4>
              </div>
            </div>
            <div className="col-md-10 padding-5 pt-0" style={{ padding: '5px' }}>
              <div className="row">
                <div className="col-md-6 padding-5 pt-0" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_8.png"
                      alt="Image 8"
                      width={600} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
                <div className="col-md-3 padding-5 pt-0" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_9.png"
                      alt="Image 9"
                      width={300} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
                <div className="col-md-3 padding-5 pt-0" style={{ padding: '5px' }}>
                  <div className={styles.posible_box}>
                    <Image
                      src="/posible_10.png"
                      alt="Image 10"
                      width={300} 
                      height={240} 
                      layout="responsive"
                      objectFit="cover"
                      className={styles.imgSmal}
                    />
                    <h4></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PossibilitySection;