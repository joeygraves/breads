const React = require('react')
const Default = require('./layouts/Default')

const Edit = ({bread, index}) => {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.name}
         />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <br />
          <input type="submit"/>
        </form>
        <form action={`/breads/${index}?_method=PUT`} method="POST"/>

      </Default>
    )
}

module.exports = Edit
