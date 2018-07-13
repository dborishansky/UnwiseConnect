import classnames from 'classnames';
import Form from './Item/Form';
import React, { Component } from 'react';

class EditColumn extends Component {
  constructor() {
    super();

    this.state = { isEditing: false };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  onDelete() {
    this.props.onDelete(this.props.row.id);
  }

  toggleEdit() {
    const isEditing = true;
    this.setState({
      ...this.state,
      isEditing,
    });
  }

  onEdit(item) {
    const isEditing = false;
    this.setState({
      ...this.state,
      isEditing,
    });

    this.props.onEdit(item);
  }

  render() {
    const editName = classnames('btn-group', { 
      'open': this.state.isEditing,
    });

    return (
      <div>
        <div className={editName}>
          <button
            className="btn btn-primary"
            onClick={this.toggleEdit}
          >
            Edit
          </button>
          <div className="dropdown-menu toggle-description">
            <Form
              item={this.props.row}
              onSubmit={this.onEdit}
              isEditing={this.state.isEditing}
            />
          </div>
        </div>
        <button
          className="btn btn-primary"
          onClick={this.onDelete}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default (EditColumn);
