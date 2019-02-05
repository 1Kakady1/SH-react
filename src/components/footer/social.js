import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"

const social ={
    name: ["vk","fb","insta","tel","tw"],
    iconObj: [faUser, faShoppingBag]
}


function Soc(props) {
    let socList = [],
        index = 0

    for (let j = 0; j < props.data.site.siteMetadata.social.length; j++) {
        for (let i = 0; i < props.data.site.siteMetadata.social.length; i++) {
            if(social.name[i] === props.data.site.siteMetadata.social[j]){
                socList[index] =<a href={props.data.site.siteMetadata.socialUrl[j]} className="btn">
                                <FontAwesomeIcon icon={social.iconObj[i]}  className="sdsd"/>
                            </a>
                index++
            }
        } 
    }

    return socList 
}


export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            social
            socialUrl
          }
        }
      }
    `}
    render={data => 
        <div className="footer-info">
            <h2 className="footer-info__title">
                {props.title}
            </h2>
            <h3 className="footer-info__copyraite">
                {props.copyraite}
            </h3>
            <div className="social">
                <Soc data={data} {...props}  />
            </div>
        </div>
}
  />
)

Soc.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        social: PropTypes.array.isRequired,
        socialUrl: PropTypes.array.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}