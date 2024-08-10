
import React from 'react'
import {Button} from '../../globalStyles';
import {IconContext} from 'react-icons/lib';
import { PiWarehouse } from "react-icons/pi";
import { MdHouseSiding } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa6";
import { IoDocumentSharp } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { MdDocumentScanner } from "react-icons/md";
import { PricingSection, PricingWrapper, PricingHeading, PricingContainer, PricingCard, PricingCardInfo, PricingCardCost, PricingCardIcon, PricingCardPlan, PricingCardLength, PricingCardFeature, PricingCardFeatures } from './Pricing.elements';


function Pricing () {
  return (
   <IconContext.Provider value={{color: '#ab9b3c1', size: 64}}>
      <PricingSection>
        <PricingWrapper>
            <PricingHeading> Negocios</PricingHeading>
            <PricingContainer>
            <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        < MdHouseSiding />
                  </PricingCardIcon>
                  <PricingCardPlan>Negocio Pequeño</PricingCardPlan>
                  <PricingCardCost>$250.00</PricingCardCost>
                  <PricingCardLength>Mensual</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature>Reconciliaciones Bancarias</PricingCardFeature>
                     <PricingCardFeature>Entradas de Jornal</PricingCardFeature>
                     <PricingCardFeature>Registro de Ingresos y Gastos</PricingCardFeature>
                    
                    
                 </PricingCardFeatures>
                 
                          <Button primary>Elige tu Plan</Button>
               
                  </PricingCardInfo>
                </PricingCard>

                <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        <PiWarehouse />
                  </PricingCardIcon>
                  <PricingCardPlan>Negocio Mediano</PricingCardPlan>
                  <PricingCardCost>$350.00</PricingCardCost>
                  <PricingCardLength>Mensual</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature>Reconciliaciones Bancarias</PricingCardFeature>
                     <PricingCardFeature>Entradas de Jornal</PricingCardFeature>
                     <PricingCardFeature>Registro de Ingresos y Gastos</PricingCardFeature>
                 </PricingCardFeatures>
                
                          <Button primary>Elige tu Plan</Button>
                
                  </PricingCardInfo>
                </PricingCard>

                <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        < FaWarehouse />
                  </PricingCardIcon>
                  <PricingCardPlan>Negocio Grande</PricingCardPlan>
                  <PricingCardCost>$475.00</PricingCardCost>
                  <PricingCardLength>Mensual</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature>Reconciliaciones Bancarias</PricingCardFeature>
                     <PricingCardFeature>Entradas de Jornal</PricingCardFeature>
                     <PricingCardFeature>Registro de Ingresos y Gastos</PricingCardFeature>
                 </PricingCardFeatures>
                 <Button primary>Elige tu Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
            </PricingContainer>
            <br/>
            <br/>
            <PricingHeading>Otros Servicios</PricingHeading>
            <PricingContainer>
            <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        < IoDocumentSharp />
                  </PricingCardIcon>
                  <PricingCardPlan>Planilla Personal</PricingCardPlan>
                  <PricingCardCost>$35.00</PricingCardCost>
                  <PricingCardLength>Desde</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature> Preparación de Planilla</PricingCardFeature>
                     <PricingCardFeature> Reclamación de Reintegro</PricingCardFeature>
                     <PricingCardFeature> Presentación Electrónica</PricingCardFeature>
                    
                    
                 </PricingCardFeatures>
                 
                          <Button primary>Elige tu Plan</Button>
               
                  </PricingCardInfo>
                </PricingCard>

                <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        <IoDocuments/>
                  </PricingCardIcon>
                  <PricingCardPlan> Planilla Federal</PricingCardPlan>
                  <PricingCardCost>125.00</PricingCardCost>
                  <PricingCardLength>Desde</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature>Preparación de Planilla</PricingCardFeature>
                     <PricingCardFeature>Asistencia en Auditorías</PricingCardFeature>
                     <PricingCardFeature>Reclamación de Reintegro</PricingCardFeature>
                 </PricingCardFeatures>
                
                          <Button primary>Elige tu Plan</Button>
                
                  </PricingCardInfo>
                </PricingCard>

                <PricingCard to="https://www.facebook.com/profile.php?id=61563869588304"  target="_blank" rel="noopener noreferrer">
                  <PricingCardInfo>
                    <PricingCardIcon>
                        < MdDocumentScanner  />
                  </PricingCardIcon>
                  <PricingCardPlan>Corporaciones</PricingCardPlan>
                  <PricingCardCost>$800.00</PricingCardCost>
                  <PricingCardLength>Desde</PricingCardLength>
                  <PricingCardFeatures>
                     <PricingCardFeature>Los servicios Incluyen</PricingCardFeature>
                     <PricingCardFeature>Reconciliaciones Bancarias</PricingCardFeature>
                     <PricingCardFeature>Estados Financieros internos</PricingCardFeature>
                     <PricingCardFeature>Registro de Ingresos y Gastos</PricingCardFeature>
                 </PricingCardFeatures>
                 <Button primary>Elige tu Plan</Button>
                  </PricingCardInfo>
                </PricingCard>
            </PricingContainer>
        </PricingWrapper>
      </PricingSection>



   </IconContext.Provider>
  )
}

export default Pricing;



