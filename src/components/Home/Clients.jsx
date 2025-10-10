import React from 'react'
import Kolors from '../../assets/images/clients/kolors.png'
import Naga from '../../assets/images/clients/naga.png'
import Herbocare from '../../assets/images/clients/herbocare.png'
import Vcare from '../../assets/images/clients/v_care.png'
import Sk from '../../assets/images/clients/sk.png'
import Vlc from '../../assets/images/clients/vlcc.png'
import Tele from '../../assets/images/clients/tele_one.png'
import Buy from '../../assets/images/clients/buy_happy.png'
import Naptol from '../../assets/images/clients/naptol.png'
import Marquee from 'react-fast-marquee'

const Clients = () => {
  const clients = [
    { img: Kolors, alt: 'kolors' },
    { img: Naga, alt: 'naga' },
    { img: Herbocare, alt: 'herbocare' },
    { img: Vcare, alt: 'vcare' },
    { img: Sk, alt: 'sk' },
    { img: Vlc, alt: 'vlcc' },
    { img: Tele, alt: 'tele' },
    { img: Buy, alt: 'buy' },
    { img: Naptol, alt: 'naptol' }
  ]

  return (
    <>
      <section className='clients relative overflow-hidden '>
        <div className='  py-20 px-10 '>
         
          <Marquee >
            {clients.map((client, id) => (
              <div
                key={id}
                className='flex justify-around items-center w-full h-full '
              >
                <img
                  src={client.img}
                  alt={client.alt}
                  className='h-14 object-cover px-5 md:px-10 '
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

    </>
  )
}

export default Clients
