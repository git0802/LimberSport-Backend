// utils
import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

const DESCRIPTION = `
<h6>Specifications</h6>
<br/>
<ol>
  <li>Category</li>
  <li>Shoes</li>
</ol>

<br/>
<ol>
  <li>Manufacturer</li>
  <li>Nike</li>
</ol>

<br/>
<ol>
  <li>Serial Number</li>
  <li>358607726380311</li>
</ol>

<br/>
<ol>
  <li>Ships From</li>
  <li>United States</li>
</ol>

<br/>
<br/>

<h6>Product Details</h6>
<br/>
<ul>
  <li><p>The foam sockliner feels soft and comfortable</p></li>
  <li><p>Pull tab</p></li>
  <li><p>Not intended for use as Personal Protective Equipment</p></li>
  <li><p>Colour Shown: White/Black/Oxygen Purple/Action Grape</p></li>
  <li><p>Style: 921826-109</p></li>
  <li><p>Country/Region of Origin: China</p></li>
</ul>

<br/>
<br/>

<h6>Benefits</h6>
<br/>
<ul>
  <li>
    <p>Mesh and synthetic materials on the upper keep the fluid look of the OG while adding comfort</p>
    and durability.
  </li>
  <li>
    <p>Originally designed for performance running, the full-length Max Air unit adds soft, comfortable cushio</p>
    ning underfoot.
  </li>
  <li><p>The foam midsole feels springy and soft.</p></li>
  <li><p>The rubber outsole adds traction and durability.</p></li>
</ul>

<br/>
<br/>

<h6>Delivery and Returns</h6>
<br/>
<p>Your order of $200 or more gets free standard delivery.</p>
<br/>
<ul>
  <li><p>Standard delivered 4-5 Business Days</p></li>
  <li><p>Express delivered 2-4 Business Days</p></li>
</ul>
<br/>
<p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>

`;

const SIZES = ['6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'];

const ATTACHMENTS = [...Array(20)].map((_, index) => _mock.image.product(index));

const REVIEWS = [...Array(8)].map((_, index) => ({
  id: _mock.id(index),
  name: _mock.fullName(index),
  postedAt: _mock.time(index),
  comment: _mock.sentence(index),
  isPurchased: _mock.boolean(index),
  rating: _mock.number.rating(index),
  avatarUrl: _mock.image.avatar(index),
  helpful: _mock.number.nativeL(index),
  attachments:
    (index === 1 && ATTACHMENTS.slice(0, 1)) ||
    (index === 3 && ATTACHMENTS.slice(2, 4)) ||
    (index === 5 && ATTACHMENTS.slice(5, 8)) ||
    [],
}));

const NEW_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [1, 2, 3].includes(index),
  content: 'NEW',
}));

const SALE_LABELS = [...Array(20)].map((_, index) => ({
  enabled: [4, 5].includes(index),
  content: 'SALE',
}));

const RATINGS = [...Array(5)].map((_, index) => ({
  name: `${index + 1} Star`,
  starCount: _mock.number.nativeL(index),
  reviewCount: _mock.number.nativeL(index + 1),
}));

const IMAGES = [...Array(8)].map((_, index) => _mock.image.product(index));

// ----------------------------------------------------------------------

export const _products = [...Array(20)].map((_, index) => {
  const publish = index % 3 ? 'published' : 'draft';

  const category = (index % 2 && 'Shose') || (index % 3 && 'Apparel') || 'Accessories';

  const gender = (index % 2 && 'Men') || (index % 3 && 'Women') || 'Kids';

  const available = (index % 2 && 72) || (index % 3 && 10) || 0;

  const inventoryType = (index % 2 && 'in stock') || (index % 3 && 'low stock') || 'out of stock';

  const priceSale = index % 3 ? null : _mock.number.price(index);

  return {
    id: _mock.id(index),
    gender,
    publish,
    category,
    available,
    priceSale,
    taxes: 10,
    quantity: 80,
    sizes: SIZES,
    inventoryType,
    images: IMAGES,
    ratings: RATINGS,
    reviews: REVIEWS,
    tags: _tags.slice(0, 5),
    code: `38BEE27${index}`,
    description: DESCRIPTION,
    newLabel: NEW_LABELS[index],
    sku: `WW75K521${index}YW/SV`,
    createdAt: _mock.time(index),
    saleLabel: SALE_LABELS[index],
    name: _mock.productName(index),
    price: _mock.number.price(index),
    coverUrl: _mock.image.product(index),
    totalRatings: _mock.number.rating(index),
    totalSold: _mock.number.nativeM(index + 1),
    totalReviews: _mock.number.nativeL(index + 1),
    subDescription:
      'Featuring the original ripple design inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full-speed ahead.',
    colors:
      (index === 0 && COLORS.slice(0, 2)) ||
      (index === 1 && COLORS.slice(1, 3)) ||
      (index === 2 && COLORS.slice(2, 4)) ||
      (index === 3 && COLORS.slice(3, 6)) ||
      //
      (index === 4 && COLORS.slice(4, 6)) ||
      (index === 5 && COLORS.slice(5, 6)) ||
      (index === 6 && COLORS.slice(0, 2)) ||
      (index === 7 && COLORS.slice(4, 6)) ||
      //
      (index === 8 && COLORS.slice(2, 4)) ||
      (index === 9 && COLORS.slice(2, 6)) ||
      (index === 10 && COLORS.slice(3, 6)) ||
      (index === 11 && COLORS.slice(2, 6)) ||
      //
      (index === 12 && COLORS.slice(2, 7)) ||
      (index === 13 && COLORS.slice(4, 7)) ||
      (index === 14 && COLORS.slice(0, 2)) ||
      (index === 15 && COLORS.slice(5, 8)) ||
      //
      (index === 16 && COLORS.slice(4, 6)) ||
      (index === 17 && COLORS.slice(5, 6)) ||
      (index === 18 && COLORS.slice(0, 2)) ||
      (index === 19 && COLORS.slice(4, 6)) ||
      COLORS.slice(2, 6),
  };
});
