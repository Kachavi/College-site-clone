import Footer from "./Footer"
import Header from "./Header"


function Mission() {
    return (
        <>
            <Header />

            <div class="container" id="container">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item"><a href="/page/about-us/">About Us</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Our Mission &amp; Vision</li>
                    </ol>
                </nav>

                <div class="row">

                    <div class="col-md-12 col-lg-9">

                        <h1 class="text-center font-weight-bold">Our Mission &amp; Vision</h1>


                        <div class="text-center">
                        </div>

                        <div>
                            <div class="entry-content" align="justify">

                                <h3>OUR VISION</h3>

                                <p><em>“To be leading educational institution by providing world class
                                    education in diverse emerging disciplines to produce conscientious and
                                    learned professional who significantly contribute to socio-economic
                                    development of the nation.”</em></p>

                                <h3>OUR MISSION</h3>
                                <p><em>“We, at the Thakur College of Science &amp; Commerce will strive
                                    to achieve excellence through quality education by providing the right
                                    academic ambience for overall development of the Students.”</em></p>

                                <h3>OUR GOALS &amp; OBJECTIVE</h3>

                                <p><em>To impart Quality Education through knowledge and skills in the chosen area of study.<br /><br />To
                                    provide opportunities for co-curricular, extra-curricular and extra
                                    mural activities aimed at all round development of personality.<br /><br />To
                                    develop individuals with multifaceted personality who will shoulder
                                    responsibilities of the family, the Society and the Nation.</em></p>
                            </div>
                        </div>

                        <div class="row mt-0 pt-0 mb-3">
                            <div class="col-sm-12 mt-0 pt-0">
                            </div>
                        </div>

                    </div>

                    <br />

                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Mission