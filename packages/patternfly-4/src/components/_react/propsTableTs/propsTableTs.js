import React from 'react';
import PropTypes from 'prop-types';
import { Table, Row, TD, TH, Body, Heading } from '../table';
import Section from '../../section';
import { ExclamationCircleIcon } from '@patternfly/react-icons';

const docGenPropShape = PropTypes.shape({
  name: PropTypes.string,
  comment: PropTypes.shape({ shortText: PropTypes.string }),
  type: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string
  }),
  flags: PropTypes.shape({ isOptional: PropTypes.bool })
});

const propTypes = {
  name: PropTypes.string.isRequired,
  props: PropTypes.arrayOf(docGenPropShape)
};

const defaultProps = {
  props: []
};

export const PropsTableTs = ({ name, props }) => (
  <Section 
    name={name} 
    title={`${name} Props`} 
    headingLevel="h3"
    description={`The ${name} component accepts the following props.`}
  >
    <Table className="ws-props-table">
      <Heading>
        <TH>Name</TH>
        <TH>Type</TH>
        <TH align="center">Required</TH>
        {/* <TH>Default</TH> */}
        <TH>Description</TH>
      </Heading>
      <Body>
        {props.map(prop => (
          <Row key={prop.name}>
            <TD>{prop.name}</TD>
            <TD>{prop.type.name}</TD>
            <TD align="center">{prop.flags.isOptional === null && <ExclamationCircleIcon />}</TD>
            {/* <TD>{Boolean(prop.defaultValue) && prop.defaultValue.value}</TD> */}
            <TD>{prop.comment && prop.comment.shortText}</TD>
          </Row>
        ))}
      </Body>
    </Table>
  </Section>
);

PropsTableTs.propTypes = propTypes;
PropsTableTs.defaultProps = defaultProps;

export default PropsTableTs;
