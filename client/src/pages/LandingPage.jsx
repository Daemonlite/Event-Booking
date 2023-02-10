import {ImCreditCard} from 'react-icons/im'
import {BsFileEarmarkText,BsMegaphone} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {GrTicket} from 'react-icons/gr'
import {FaClipboardList} from 'react-icons/fa'

const LandingPage = () => {

    return(
        <div className="landing">
    <div class="header">
      <div class="head-text">
        <h1 class="org-title">
        Event Booking Software that saves you time at every step.
        </h1>
        <p class="para">
        You follow your passions, We'll take care of bookings.
        The Event Booking System that makes things easy.
        </p>

        <div class="btns">
          <div class="first-btn">Start your search &#8594;</div>
        </div>
      </div>
      <div class="head-img">
        <img
          src="https://chisfis-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Four-features.6cf4c3d4.png&w=1200&q=75"
          alt=""
          height="500px"
          width="500"
        />
      </div>
    </div>

    <section>
        <h3 className="sec-head">
        Whatever you organise, we’ve got you covered
        </h3>

<div className="section">
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustConference-c068e05b1f2ca74abc9d82ce749ff47b6783c8a65c450465dcde7847150704b7.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Conferences</p>
  </div>
</div>
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustSeminar-6da747e377c716a694791e4a1f5cc4934d638a0b1cba9bf50430d896ad35389c.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Seminars</p>
  </div>
</div>
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustWorkshop-d7dfae0b2e3ce50d9aa5fc1f0da8f8646d5af7201fce761e84a6cc2342e1f976.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Workshops</p>
  </div>
</div>
</div>
<br />
<div className="section">
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustEvent-597354ce5314d7896e74c15c351d0f5e6e2d7422be6dc5a2749c0a902636511c.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Weddings</p>
  </div>
</div>
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustFestival-b51b2d641b19c3741efd2c958032e04724cf3a22e87d6bfcdf08b68cd8551275.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Festivals</p>
  </div>
</div>
<div class="card" style={{width:'25rem'}}>
  <img src="https://cdn.bookwhen.com/assets/home/others/EventTrustTheatre-3af2978e08b55c9cc8fcc9953e444e2bc56fab2b916c32196c732555141f9c0a.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text text-center descr">Cinemas/Theatres</p>
  </div>
</div>
</div>
    </section>

    <article>
        <h3 className="art-head">Great value features,for low or no ticket fees</h3>

      <div className="article">
      <div className="infos">
        <div className="icon">
            <ImCreditCard size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Eliminate no-shows</p>
            <p className="lime">
            Ask customers to pay upfront with PayPal, Stripe or Worldpay. 
            Transfer and cancellation policies can also be set.
            </p>
        </div>
       </div>
       <div className="infos">
        <div className="icon">
            <BsFileEarmarkText size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Waivers sorted before event</p>
            <p className="lime">
            Attach waivers and other documents to your booking form.
             Add marketing, GDPR, T&C's and photo consent fields.
            </p>
        </div>
       </div>
       <div className="infos">
        <div className="icon">
            <MdOutlineMail size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Automatic emailing</p>
            <p className="lime">
            Automatic confirmation and reminder emails for attendees 
            including all the need-to-know information.
            </p>
        </div>
       </div>
      </div>
      <br />
      
      <div className="article">
      <div className="infos">
        <div className="icon">
            <GrTicket size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Sell more spaces</p>
            <p className="lime">
            Single, group, course, termly, family, child and early-bird tickets options.
             Set ticket allowances and cut-off times.
            </p>
        </div>
       </div>
       <div className="infos">
        <div className="icon">
            <BsMegaphone size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Promote like a pro</p>
            <p className="lime">
            Use discount codes, block-booking discounts and waiting lists to
             grow your business and drive bookings.
            </p>
        </div>
       </div>
       <div className="infos">
        <div className="icon">
            <FaClipboardList size={40}/>
        </div>
        <div className="cont">
            <p className="elim">Stay organised on the day</p>
            <p className="lime">
            Check in attendees on the day with our register. Have all the information
             you need at your fingertips.
            </p>
        </div>
       </div>
      </div>
    </article>

    {/* <main>
    <h3 className="main-head">We support thousands of happy businesses</h3>
   <div className="main">
    <div className="mate">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Voluptatum exercitationem obcaecati id, magnam quos pariatur
         doloremque maxime ut quod ratione? 
        Voluptas maxime ea incidunt vero dolores earum a mollitia! Eligendi?
  
    </div>
    <div className="mages">
        <img src="https://cdn.bookwhen.com/assets/home/clients/testimonials/Josie-83a1b1ee7bff2cf91c95d207ffe810f93ceac9d7dad90085aa0af0eb367d02f8.png" alt="" className="image-fluid" />
      <div className="inform">
      <p className="name">Jollie</p>
        <p className="council">Bhuddist Council of PMB</p>
      </div>
    </div>
   </div>

   
    </main> */}
        </div>
    )
}

export default LandingPage