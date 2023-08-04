import { containerItems } from './ImagesContainer';

export default function Main(){
    return (
        <main role="main" className="main">
            
          <section className="hero-unit">
            <div className="sectionContainer">
              <h1 className="sectionTag">How can we help?</h1>
              <input className="input1" placeholder="Search" type="text" />
            </div>
          </section>

          <section className="MiddlePage">
            <div className="Container">

                {containerItems.map((item, index) => (

                    <div className="ContainerItem" key={index}>

                        <div className="ContainerIMG">
                            <img className={`img1`} src={item.imgSrc} alt={item.imgAlt} />
                        </div>

                        <div className="ContainerContent">
                            <h3>{item.title}</h3>
                            <p className="ContainerContent_Text">{item.text}</p>
                            <a>Learn More →</a>
                        </div>

                    </div>
                ))}

             </div>
            </section>
        </main>
      );
    }