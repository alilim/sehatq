import React from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ImageComponent from '../../../components/image/image.component'
import TextComponent from '../../../components/text/text.component'
import { ContentLoaderCategory } from '../../../components/loader/loader.component'

import { NavContainer, NavItemWrapper, NavItemDescription } from '../home.style'

const NavPartials = ({isLoading, currentCategory}) => {
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.5,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.5,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2.5,
        }
      },
    ]
  }
  return (
    <NavContainer>
      {
        (isLoading || isLoading === undefined) ? <ContentLoaderCategory /> : (
          currentCategory?.category?.length ? (
            <Slider {...settings}>
              {
                currentCategory.category.map((category, idx) => {
                  return (
                    <div key={idx}>
                      <NavItemWrapper>
                        <ImageComponent mode='nav' src={category.imageUrl} width='80px' height='80px' />
                        <NavItemDescription>{category.name}</NavItemDescription>
                      </NavItemWrapper>
                    </div>
                  )
                })
              }
            </Slider>

          ) :  <TextComponent color='#fff'>No Category</TextComponent>)
      }
    </NavContainer>
  )
}

const mapStateToProps = state => ({
  currentCategory: state.item.currentCategory
})

export default connect(mapStateToProps)(NavPartials)