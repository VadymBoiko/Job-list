import React from 'react'

export const Description = (description) => {
  let descriptionWithOutBenefits = description.slice(0, description.indexOf('Compensation & Benefits:'))
  let descriptionBenefits = description.slice(description.indexOf('Compensation & Benefits:'));
  let descriptionReplace = descriptionBenefits.replace('Compensation & Benefits:', '').replace(/\n/g, '')

  let benefitsList = descriptionReplace.split('.');

  let descriptionBenefitsText = `<h3>Compensation & Benefits:</h3>
        Our physicians enjoy a wide range of benefits, including:
        <ul>
        ${benefitsList.map((item) => {
    if (item) {
      return `<li>${item}</li>`
    }
  }).join(' ')}
        </ul>`
  let text = descriptionWithOutBenefits.replace('Responsopilities:', `<h3>Responsopilities:</h3>`) +
    descriptionBenefitsText;
  return (
    <p dangerouslySetInnerHTML={{ __html: text }}></p>
  )
}
