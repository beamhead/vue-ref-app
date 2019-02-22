<template>
  <div>
    <vue-headful title="Inspect - kontroller" description="" />
    <h1 class="title">Exempelsida för kontroller</h1>

    <h1 class="subtitle">Switch</h1>
    <section>
      <div class="field">
        <b-switch :value="true">
          Default
        </b-switch>
      </div>
      <div class="field">
        <b-switch :value="true" type="is-info">
          Info
        </b-switch>
      </div>
      <div class="field">
        <b-switch :value="true" type="is-success">
          Success
        </b-switch>
      </div>
      <div class="field">
        <b-switch :value="true" type="is-danger">
          Danger
        </b-switch>
      </div>
      <div class="field">
        <b-switch :value="true" type="is-warning">
          Warning
        </b-switch>
      </div>
    </section>
    <hr />
    <h1 class="subtitle">Indata</h1>
    <section>
      <b-field>
        <b-input placeholder="Search..." type="search" icon="far fa-search">
        </b-input>
        <p class="control">
          <button class="button is-primary">Search</button>
        </p>
      </b-field>

      <b-field>
        <b-input placeholder="This is expanded" expanded></b-input>
        <p class="control">
          <span class="button is-static">@gmail.com</span>
        </p>
      </b-field>

      <hr />

      <b-field>
        <b-select placeholder="Currency">
          <option>$</option>
          <option>£</option>
          <option>€</option>
        </b-select>
        <b-input type="number" placeholder="0,00"></b-input>
        <p class="control">
          <button class="button is-success">Transfer</button>
        </p>
      </b-field>

      <b-field>
        <p class="control">
          <button class="button">
            <b-icon icon="format-bold"></b-icon>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <b-icon icon="format-italic"></b-icon>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <b-icon icon="format-underline"></b-icon>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <b-icon icon="format-align-left"></b-icon>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <b-icon icon="format-align-center"></b-icon>
          </button>
        </p>
        <p class="control">
          <button class="button">
            <b-icon icon="format-align-right"></b-icon>
          </button>
        </p>
        <b-input
          placeholder="Search..."
          type="search"
          icon="far fa-search"
        ></b-input>
      </b-field>

      <b-field>
        <p class="control">
          <button class="button is-primary">
            Button
          </button>
        </p>
        <p class="control">
          <b-dropdown>
            <button class="button is-primary" slot="trigger">
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-item>Something else</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-field>

      <b-field>
        <p class="control">
          <b-dropdown>
            <button class="button" slot="trigger">
              <span>Filters</span>
              <b-icon icon="menu-down"></b-icon>
            </button>

            <b-dropdown-item value="open_issues"
              >Open Issues and Pull Requests</b-dropdown-item
            >
            <b-dropdown-item value="your_issues">Your Issues</b-dropdown-item>
            <b-dropdown-item value="pull_requests"
              >Your Pull Requests</b-dropdown-item
            >
            <b-dropdown-item value="everything">Everything</b-dropdown-item>
          </b-dropdown>
        </p>
        <b-input
          icon="far fa-search"
          type="search"
          placeholder="Search..."
        ></b-input>
      </b-field>
    </section>

    <hr />
    <h1 class="subtitle">Meddelande</h1>
    <section>
      <b-message title="Default">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
        laoreet elit
      </b-message>

      <b-message title="Danger" type="is-danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
        laoreet elit
      </b-message>

      <b-message title="Success" type="is-success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
        laoreet elit
      </b-message>

      <b-message title="Info" type="is-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
        laoreet elit
      </b-message>

      <b-message title="Warning" type="is-warning">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        fermentum quam. Proin sagittis, nibh id hendrerit imperdiet, elit sapien
        laoreet elit
      </b-message>
    </section>
  </div>
</template>
