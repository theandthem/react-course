import React from 'react';
import Text from './Text';
import style from './Topic.module.css';
import SimpleAccordion from './SimpleAccordion';
import TabPanel from  './TabPanel.js';

const Components = {
  text: Text,
  image: Image,
  simpleAccordion: SimpleAccordion,
  tabPanel: TabPanel,
};

const topicData = [
  {
    screenId: 't2s1',
    components: [
      {
        id: 'c1',
        type: 'text',
        data: {
          contentengb: 'Topic 2',
          contentde: 'Thema 2 - GERMAN',
          textStyle: 'h4',
        },
      },
      {
        id: 'c2',
        type: 'text',
        data: {
          contentengb: 'This topic contains MUI components.',
          contentde: 'Bbenutzerdefinierten als auch mit MUI-Komponenten erstellt wurde.',
          textStyle: 'h4',
        },
      },
    ]
  },
  {
    screenId: 't2s2',
    components: [
      {
        id: 'c1',
        type: 'text',
        data: {
          content: 'Screen one',
          textStyle: 'h1'
        },
      },
      {
        id: 'c2',
        type: 'text',
        data: {
          content: 'Accordion from the MUI library',
          textStyle: 'paragraph'
        },
      },
      {
        id: 'c3',
        type: 'simpleAccordion',
        data: {
          steps: [
            {title: 'Step one', content:'This is step one content'},
            {title: 'Step two', content:'This is step two content'},
            {title: 'Step three', content:'This is step three content'}
          ],
        },
      },
    ]
  },
  {
    screenId: 't2s3',
    components: [
      {
        id: 'c1',
        type: 'text',
        data: {
          content: 'Screen two',
          textStyle: 'h1'
        },
      },
      {
        id: 'c2',
        type: 'text',
        data: {
          content: 'Tabs from the MUI library',
          textStyle: 'paragraph'
        },
      },
      {
        id: 'c3',
        type: 'tabPanel',
        data: {
          items: [
            {title:'Tab one', content:'Content for tab one.'},
            {title:'Tab two', content:'Some content for tab two.'},
            {title:'Tab three', content:'Finally, content for tab three.'},
          ],
        },
      },
    ]
  },
]

function Topic2() {
  return (
    <section className={style.topic}>
      {topicData.map(function(screen, index){
          return (
            <section className={style.screen} key={index}>
              {screen.components.map(function(component, index) {
                return React.createElement(Components[component.type], {
                  key: index,
                  data: component.data,
                });
              })}
            </section>
          );
      })}
    </section>
  );
}

export default Topic2;