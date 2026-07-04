import { Banner } from '../templates/Banner';

const styles = {
  textContainer: {
    fontSize: '10pt',
    color: 'black',
  },
  span: {
    display: 'block',
    height: '25px',
    borderLeft: '3px solid #2C4DCA',
  },
};

const Imprint = () => {
  return (
    <>
      <Banner title="Imprint" />
      <div className="flex md:flex-row flex-col justify-center align-center md:justify-evenly mt-16 mb-32 lg:ml-12 xl:ml-32 pl-3">
        <div className="flex items-center md:mb-0">
          <img src="/icons/icon-f.svg" alt="logo" className="h-12" />
          <span style={styles.span} className="ml-12 mr-12"></span>
          <div style={styles.textContainer}>
            <div>ProStore Software Ltd</div>
            <div className="mb-2 mt-2">
              <div>Company nr. 208069356 </div>
              <div>UID (VAT)-Number: </div>
            </div>
            <div>Address: БЪЛГАРИЯ, гр. София (1756), р-н Студентски, жк. Дървеница, бл. 32, ап. офис - партер</div>
          </div>
        </div>
        <div className="flex items-center w-full md:w-72 mt-12 md:mt-0">
          <img src="/icons/icon-person.svg" alt="person" className="h-10" />
          <span style={styles.span} className="ml-9 mr-11"></span>
          <div style={styles.textContainer}>
            <div>
              <div>Vitali Chebanu, </div>
              <div>Geschäftsführer</div>
            </div>
            <div className="mb-2 mt-2">E-mail: cob@finhubfund.com</div>
            <div>Phone: +359 89 5733067</div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Imprint;
