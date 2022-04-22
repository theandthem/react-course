import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from './SimpleAccordion.module.css';

class SimpleAccordion extends React.Component {
  render() {
    return (
      <section>
        {this.props.data.steps.map(function(step, index){
          return (
            <Accordion key={index} className={style.step}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{step.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={style.content}>
                  {step.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </section>
    );
  }
}

export default SimpleAccordion;