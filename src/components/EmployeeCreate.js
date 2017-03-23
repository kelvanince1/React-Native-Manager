import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const { name, phone, shift, department } = this.props;

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday', department });
  }


  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, department, shift } = state.employeeForm;

  return { name, phone, department, shift }
};

export default connect(mapStateToProps,
  {employeeUpdate, employeeCreate})(EmployeeCreate);
