## Documentation of Shopping cart application HTML Template ( CSS )

<br />

### Variables Used in This Project

```css
:root {
   --brand-font-family: "Montserrat", sans-serif;
   --text-font-family: "Roboto", sans-serif;

   --page-color: #f5f5f5;
   --section-color: #ffffff;
   --nav-color: #333333;
   --nav-text-color: #ffffff;
   --font-color: #4242442;
   --brand-color: #424242;
   --font-color-secondary: #666666;
   --border-color: #efefef;
   --table-stipe-color: #f1f1f1;
   --table-stipe-color-success: #eafdd0;

   --font-size-brand: 1.5rem;
   --font-size-text: 1rem;
   --font-size-title-sm: 1.25rem;
   --font-size-title-md: 1.5rem;
   --font-size-title-lg: 1.75rem;

   --completed-table-header-color: #4a8d47;
   --completed-table-header-font-color: #ffffff;
   --completed-table-cell-color: #f2fde4;
}
```

<br />

## BEM Blocks Classes

---

**container** - [Block] 60% width Container, Page Container, Nav Container

**section** - [Block] for multiple section, a white background empty card, no padding, no margin applied

HTML Examples

```html
<div class="container">
   <div class="section"></div>
</div>
```

<br/>

### Nav Blocks, Elements and Modifiers

---

**nav** - [Block] 100% width main nav area with no tightly coupled height, margin and padding

**nav\_\_container** - [Element] A flex container with applied 0.5rem top-bottom margin

**nav\_\_brand** - [Element] A flex container for brand

**nav\_\_brand-logo** - [Element] Main brand image or logo

**nav\_\_brand-name** - [Element] Brand Name

**nav\_\_menu** - [Element] Navigation Menu Container

**nav\_\_menu-icon** - [Element] Navigation Menu Icon

**nav\_\_menu--right** - [Modifier] Modifier to push navigation menu to right

<br />

HTML Example

```html
<nav class="nav __shadow--lg">
   <div class="container nav__container">
      <div class="nav__brand">
         <img class="nav__brand-logo" src="src" alt="alt" />
         <h1 class="nav__brand-name">Company Name</h1>
      </div>
      <div class="nav__menu nav__menu--right">
         <div class="nav__menu-items">
            <img class="nav__menu-icon" src="src" alt="alt" />
         </div>
      </div>
   </div>
</nav>
```

### Add-Item Block, Elements and Modifiers

---

**add-item** - [Block] Main Block of add item section

**add-item\_\_relative** - [Element] A container for relative positioned element

**add-item\_\_input** - [Element] Input field and icon container

**add-item\_\_icon** - [Element] Image tag containing input icon

**add-item\_\_input-field** [Element] Main input field for add item

<br/>

HTML Example

```html
<div class="section add-item __shadow--sm">
   <div class="add-item__relative">
      <div class="add-item__input">
         <img
            class="add-item__icon"
            src="./assets/icons/plus-icon.png"
            alt="Create New Bucket"
         />
         <input
            class="add-item__input-field"
            type="text"
            placeholder="Create New Bucket"
         />
      </div>
   </div>
</div>
```

<br/>

**add-item\_\_filter-overlay** - [Element] Filter or suggestion overlay container absolute positioned of `add-item__relative`

**add-item\_\_filter-list** - [Element] `<ul>` element of filtered list

**add-item\_\_filter-item** - [Element] `<li>` element of filtered list

**add-item\_\_filter-content** - [Element] main content area of `add-item**filter-item`, actually a div who will contain all the necessary data

**add-item\_\_filter-icon** - [Element] Icon of the each list element

<br />

HTML Example

```html
<div class="add-item">
   <div class="add-item__relative">
      <div class="add-item__input">...</div>
      <div class="add-item__filter-overlay hide">
         <ul class="add-item__filter-list">
            <li class="add-item__filter-item">
               <div class="add-item__filter-content">
                  <img
                     class="add-item__filter-icon"
                     src="./assets/icons/plus-icon.png"
                     alt="Item"
                  />
                  Egg
               </div>
            </li>
         </ul>
      </div>
   </div>
</div>
```

**add-item\_\_suggestions** - [Element] flex container for all suggestions and controllers

**add-item\_\_suggestion-control** - [Element] Button element for controlling next and previous items

**add-item\_\_suggestion-control-icon** - [Element] next previous button icon image

**add-item\_\_suggestion-control--prev** - [Modifier] previous button modifier

**add-item\_\_suggestion-control--next** - [Modifier] next button modifier

**add-item\_\_suggestion-chips** - [Element] all chip container

**add-item\_\_suggestion-chip-item** - [Element] single chip item

<br/>

HTML Example

```html
<div class="add-item">
   ...
   <div class="add-item__suggestions">
      <div
         class="add-item__suggestion-control add-item__suggestion-control--prev"
      >
         <img class="add-item__suggestion-control-icon" src="src" alt="alt" />
      </div>
      <div class="add-item__suggestion-chips">
         <div class="add-item__suggestion-chip-item">Egg</div>
         <div class="add-item__suggestion-chip-item">Carrot</div>
      </div>
      <div
         class="add-item__suggestion-control add-item__suggestion-control--next"
      >
         <img class="add-item__suggestion-control-icon" src="src" alt="alt" />
      </div>
   </div>
</div>
```

<br />

### Table Block, Elements and Modifiers

---

**table** - [Block] Main table block, this will apply with a section element

**table--success** - [Modifier] Success table, which will be green

**table\_\_table** - [Element] Main table element

**table\_\_thead** - [Element] table head element

**table\_\_tbody** - [Element] table body element

**table\_\_item-input** - [Element] first element with checkbox and item name

<br />

HTML Example

```html
<section class="section table table--success">
   <table class="table__table">
      <thead class="table__thead"></thead>
      <tbody class="table__tbody"></tbody>
   </table>
</section>
```

<br/>

### Icon Button Block, Elements and Modifiers

**icon-button** - [Block] Icon button block, no text only icon

**icon-button\_\_icon** - [Element] Icon button icon image

<br/>

## Utility Classes

_1 rem = 16px_

**\_\_margin** - [Util] 0.5 rem all side

**\_\_margin--md** - [Modifier] 1 rem all side

**\_\_margin--lg** - [Modifier] 2 rem all side

**\_\_margin--y** - [Util] 0.5 rem top and bottom

**\_\_margin--ymd** - [Modifier] 1 rem top and bottom

**\_\_margin--ylg** - [Modifier] 2 rem top and bottom

**\_\_margin--x** - [Util] 0.5 rem left and right

**\_\_margin--xmd** - [Modifier] 1 rem left and right

**\_\_margin--xlg** - [Modifier] 2 rem left and right

**\_\_shadow--lg** - [Modifier] `0 1px 10px 5px rgba(0, 0, 0, 0.25);`

**\_\_shadow--sm** - [Modifier] `0 0 3px 0 rgba(0, 0, 0, 0.1);`

**horizontal-line** - [Util] 1px border color horizontal line, no margin no padding

**show** - [Util] `display: none`

**hide** - [Util] `display: block`

**auto-grow-input** - [Util] Automatically grow input field, span element with contentEditable true and textbox role

**align-left** - [Util] Left align

**align-right** - [Util] Right align

**text-secondary** - [Util] Secondary text color
