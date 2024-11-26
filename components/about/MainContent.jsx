import Link from "next/link";
import Services from "@/components/about/Services";

const DetailsContent = () => {
  return (
    <>
      <h3 className="text-20 fw-500 mb-10">Welcome to Jetting.com!</h3>
      <div className="text-15">
        <b>Jetting.com</b>, also known simply as <b>Jetting</b> or <b>Jetting Aggregator</b>—your gateway to the world.<br /> As a <a className="underline" href="https://jetting.com/">travel booking aggregator</a>, we are dedicated to simplifying your travel planning process by providing an extensive range of options for flights, hotels, and more, all in one convenient location.
      </div>
      
      <h3 className="text-18 fw-500 mt-30 mb-10">What We Do</h3>
      <div className="text-15">
        Unlike traditional travel booking platforms, Jetting.com does not sell tickets or services directly. Instead, we provide a comprehensive platform where travelers can compare prices and options from various travel providers all in one place. Whether you're planning a quick weekend getaway or a month-long journey across several countries, our platform allows you to customize your travel plans according to your needs and budget.
      </div>
      
      <h3 className="text-18 fw-500 mt-30 mb-10">What is a Jetting Aggregator</h3>
      <div className="text-15">
        A travel booking aggregator, like Jetting, is a specialized platform that compiles data from a variety of travel-related services and presents them to users in a consolidated form. Unlike traditional travel booking services that often sell tickets and packages directly, an aggregator gathers information from multiple sources, allowing you to compare prices, schedules, and other travel details side-by-side. This means you can make informed decisions without the need to visit multiple websites or platforms.
      </div>

      <div className="quote mt-40 mb-40">
        <div className="quote__line bg-dark-1" />
        <div className="quote__icon">
          <img src="/img/misc/quote-light.svg" alt="quote" />
        </div>
        <div className="text-18 fw-500">
          “Jetting Aggregator makes travel planning a breeze—just one quick search, and you've got all the best flight options“
        </div>
      </div>
      
      <h3 className="text-18 fw-500 mt-30 mb-10">Our Experience</h3>
      <div className="text-15">
        Our team brings over a decade of experience in the travel industry to Jetting. We are not just professionals; we are passionate travelers ourselves. Our rich travel experiences range from trekking the ancient ruins scattered across continents to marveling at the architectural wonders of the modern world. This unique blend of professional and personal travel expertise enables us to understand and cater to the varied needs of our users. Over the years, we've journeyed around the globe, visiting nearly all the famous wonders of the world— from ancient marvels like the Great Pyramid of Giza, the Lighthouse of Alexandria, and the Colossus of Rhodes, to architectural feats such as the Parthenon and the Colosseum, and modern masterpieces like the Burj Khalifa and Christ the Redeemer. We’ve strolled through the historic ruins of Petra, marveled at the intricate designs of the Taj Mahal, and explored the sprawling temple complex of Angkor Wat.
      </div>
      
      <h3 className="text-18 fw-500 mt-30 mb-20">Why Choose Jetting?</h3>
      <ul className="list-disc text-16">
        <li>Comprehensive Search Results:</li>
        <div className="text-15 text-dark-1 mb-15">
           Leveraging our extensive network of travel partners, we offer a wide range of options so you can compare and choose what best fits your travel plans and budget.
        </div>
        <li>Expertise and Insight:</li>
        <div className="text-15 text-dark-1 mb-15">
          Our rich background in travel and firsthand experiences are embedded in our service, providing insights that help you make informed decisions.
        </div>
        <li>User-Friendly Interface:</li>
        <div className="text-15 text-dark-1 mb-15">
          Our platform is designed with user experience at the forefront, ensuring it’s easy to navigate, reliable, and efficient.
        </div>
        <li>Personalized Options:</li>
        <div className="text-15 text-dark-1 mb-15">
          We understand that every traveler is different. That’s why we offer customizable search filters that allow you to fine-tune your preferences.
        </div>
        <li>Global Reach, Local Touch:</li>
        <div className="text-15 text-dark-1 mb-20">
          While our scope is global, we pay great attention to local details, which often make the difference in creating a memorable travel experience.
        </div>
      </ul>
      
      <h3 className="text-18 fw-500 mt-30 mb-10">Our Promise</h3>
      <div className="text-15">
        At Jetting, our commitment is to provide you with a seamless and enjoyable travel planning experience. We are here to help you discover the best the world has to offer, without the hassle of visiting multiple websites. With Jetting, you can rest assured that you are accessing a world of choices at the best prices, all in one place.
      </div>

      <div className="row y-gap-30 pt-40">
        <Services />
      </div>
      {/* End .row */}
      
      <h3 className="text-18 fw-500 mt-40 mb-10">Join Us on Your Next Adventure</h3>
      <div className="text-15">
        Ready to start planning your next trip? Visit us at Jetting.com and experience the future of travel booking. Let us take care of the details, so you can focus on packing your bags and creating memories that will last a lifetime. Jetting is more than just a travel aggregator; we are your travel partner. Join us, and let’s make your next journey unforgettable.
      </div>

        <br />
    </>
  );
};

export default DetailsContent;
