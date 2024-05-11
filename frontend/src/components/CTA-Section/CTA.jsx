import React from 'react'
import './CTA.css'
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className='cta-section'>
      <div className='container'>
        <h1>{t("CTA1")}</h1>
        <p>{t("CTA2")}</p>
        <div>
        <a href="#contact" type="button" className="btn btn-outline-dark">{t("enquire")}</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
