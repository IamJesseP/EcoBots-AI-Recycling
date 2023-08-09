/* eslint-disable react/prop-types */
import React from 'react';
import '../card.css';
import CBcard from '../assets/CFcard.png';
export default function EducationalCard({ botResponse, title, image }) {
  return (
    <div className="card-edu">
      <article className="card-edu">
        <img
          className="card-edu__background"
          src={image}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width="1920"
          height="2193"
        />
        <div className="card-edu__content | flow">
          <div className="card-edu__content--container | flow transparent">
            <h2 className="card-edu__title transparent">{title}</h2>
            <div className="card-edu__description transparent">
              {Array.isArray(botResponse) ? (
                botResponse.map((fact, index) => (
                  <p key={index} className="transparent">
                    {fact}
                  </p>
                ))
              ) : (
                <p className="card-p transparent">{botResponse}</p>
              )}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
