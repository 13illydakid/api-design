'use strict';
/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: "https://live.staticflickr.com/4785/38906255630_ffbef8d645_z.jpg",
        preview: true
      },
      {
        spotId: 1,
        url: "https://live.staticflickr.com/4802/40653099372_a1b2b2c5ce.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://live.staticflickr.com/4792/25824367687_a6583ef5b8.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://live.staticflickr.com/4861/46411192181_826e85c764_z.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://mithun.com/wp-content/uploads/2022/08/UCI-Verano8_Grand-Opening_web.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://mithun.com/wp-content/uploads/2023/07/1930700_N66.jpg",
        preview: false
      },
      {
        spotId: 1,
        url: "https://educationsnapshots.com/wp-content/uploads/sites/4/2019/01/uc-irvine-mesa-court-towers-5-1200x800.jpg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://www.davisvanguard.org/wp-content/uploads/2018/03/UCD-Student-Housing-1-of-5-e1520021463561.jpg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://housing.ucmerced.edu/sites/housing.ucmerced.edu/files/images/apatments_elportal_201216-16.jpeg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://housing.ucmerced.edu/sites/housing.ucmerced.edu/files/images/Dorms/valley_terraces_11zon.jpeg",
        preview: false
      },
      {
        spotId: 2,
        url: "https://housing.ucmerced.edu/sites/housing.ucmerced.edu/files/page/images/bunkloft.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://housing.ucmerced.edu/sites/housing.ucmerced.edu/files/page/images/daden.png",
        preview: false
      },
      {
        spotId: 2,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/UCMDorms.JPG/1024px-UCMDorms.JPG",
        preview: false
      },
      {
        spotId: 3,
        url: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200,h_768/https://dcifurn.com/wp-content/uploads/2018/05/UCSC_porter2.jpg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://swinerton.com/wp-content/uploads/2019/02/UCSC-2-1030x686.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://oakes.ucsc.edu/residential-life/dsc_0385---underdome.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://housing.ucsc.edu/tours/cowell/images/cowell-triple-photo.jpg",
        preview: false
      },
      {
        spotId: 3,
        url: "https://www.crown.edu/wp-content/uploads/2020/10/lower_miller-2.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.vpix.net/uploads/panos/aberdeeninverness457189/slides/1469488960.jpg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://housing.ucr.edu/sites/default/files/styles/cta_image_small/public/reshall-pentland-hills_1.jpg?h=ab622562&itok=yhOg4X8d",
        preview: false
      },
      {
        spotId: 4,
        url: "https://ucr-iv.com/wp-content/uploads/2015/07/IMG_82141.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://admissions.ucr.edu/sites/default/files/2021-06/ucr_on-campus-housing-still-available-for-fall-2021_blog.jpghttps://hospitality.ucr.edu/sites/default/files/header-apartment_0.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.vpix.net/uploads/panos/lothian457204/slides/1469488776.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://www.vpix.net/uploads/panos/pentlandhills457202/slides/1469489194.jpg",
        preview: false
      },
      {
        spotId: 4,
        url: "https://hospitality.ucr.edu/sites/default/files/header-apartment_0.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://images.shiksha.com/mediadata/images/1536650470phpiDMvi9.jpeg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://sp-ao.shortpixel.ai/client/to_auto,q_lossy,ret_img,w_1200,h_680/https://dcifurn.com/wp-content/uploads/2018/09/DCI-Furniture-solid-hardwood-for-dorms.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://glittermagazine.co/wp-content/uploads/2021/11/Dorm-room-social-lead.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://i.pinimg.com/originals/01/a5/c7/01a5c74b38146b276e3f55b2f33420eb.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://ashleyvance.com/wp-content/uploads/2012/11/IMG_6367.jpg",
        preview: false
      },
      {
        spotId: 5,
        url: "https://dailynexus.s3-us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2019/05/Dorms_Ida-Kazerani_ONLINE.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://www.davisvanguard.org/wp-content/uploads/2021/04/ucla-housing-765x510.jpg",
        preview: true
      },
      {
        spotId: 6,
        url: "https://studios.imgix.net/img/gallery-images/assets/uploads/UCLA_Landfair_3_Column_Living_Room.jpg?q=80",
        preview: false
      },
      {
        spotId: 6,
        url: "https://portal.housing.ucla.edu/sites/default/files/styles/sf_hero_banner_bg/public/media/images/suites-hero.jpg?h=e459f0e1&itok=rL0zlJAZ",
        preview: false
      },
      {
        spotId: 6,
        url: "https://architizer-prod.imgix.net/media/145944651580412046_000_N17_medium1.jpg?w=1680&q=60&auto=format,compress&cs=strip",
        preview: false
      },
      {
        spotId: 6,
        url: "https://mithun.com/wp-content/uploads/2023/07/D05859_02_N14-1.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://d31gnh3j8cblbd.uloop.com/o25YFY4mQR9zDABSu5svQw%3D%3D/1446ab69/UCLA-Housing-430-Kelton-for-UCLA-Students-in-Los-Angeles-CA.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://studios.imgix.net/img/gallery-images/assets/uploads/UCLA_Landfair_3_Column_Kitchen.jpg?q=80",
        preview: false
      },
      {
        spotId: 6,
        url: "https://www.davisvanguard.org/wp-content/uploads/2021/04/ucla-housing-765x510.jpg",
        preview: false
      },
      {
        spotId: 6,
        url: "https://64.media.tumblr.com/c344efdeed13c157c3ade73a603199fc/tumblr_inline_p7h5q0riqc1qk0tuu_500.png",
        preview: false
      },
      {
        spotId: 6,
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Hedrick_Summit.JPG/1200px-Hedrick_Summit.JPG",
        preview: false
      },
      {
        spotId: 7,
        url: "https://live-wp-sa-housing-1.pantheon.berkeley.edu/wp-content/uploads/20190818_134307-750px-700x500.jpg",
        preview: true
      },
      {
        spotId: 7,
        url: "https://housing.berkeley.edu/wp-content/uploads/20230222_VirtualTourDay2_bhs_060-750px-700x500.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://housing.berkeley.edu/wp-content/uploads/2019_04_19_UCB_Housing_day2-11-400x267-1.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://theardmoregroup.com/wp-content/uploads/2020/11/double-room-berkeley-university-aspect-ratio-1066-1066-1066x1066.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://assets2.unilodgers.com/cdn-cgi/image/width=400,height=400,dpr=1,quality=70,format=auto/uploads/property/The-Berk-Berkeley-CA-Bedroom-With-Study-Desk-Unilodgers.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://i.insider.com/5f5b8301e6ff30001d4e8451?width=1000&format=jpeg&auto=webp",
        preview: false
      },
      {
        spotId: 7,
        url: "https://dailycal.org/wp-content/uploads/2023/04/tuition_William-Yau_staff.jpg",
        preview: false
      },
      {
        spotId: 7,
        url: "https://www.tutorperini.com/media/2749/ucb-res-bedroomb.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.6435-9/194870949_10159517476778586_3712314757689835649_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=2c4854&_nc_ohc=8gdPNqBwoxoAX-gHiBD&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=t&oh=00_AfAxzoYPCqhgypPgb7R2px5WNDB9weWgyplnRYhuqe1zZQ&oe=654C8140",
        preview: true
      },
      {
        spotId: 8,
        url: "https://housing.ucdavis.edu/_images/buildings/slide_shows/alder1.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366964497_988766842448213_6846804878532224267_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=49d041&_nc_ohc=ZzGvgil0sCUAX9b-MHx&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=t&oh=00_AfC5h5mx7-bB3n5xS8fxyXIbbNCD8-1J18nZY6PWCESevw&oe=6529D354",
        preview: false
      },
      {
        spotId: 8,
        url: "https://housing.ucdavis.edu/_images/buildings/slide_shows/thoreau1.jpg",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.6435-9/138632171_10159162969173586_7199307044000136675_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=2c4854&_nc_ohc=7AsiJvSSZuwAX_2rtCS&_nc_ht=scontent-lax3-2.xx&cb_e2o_trans=t&oh=00_AfDcRtk-G55kJvaxlU0DoAvb4GMFhGffPd3i0mrfrkQltA&oe=654CB30F",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/365982507_988766959114868_1269864165253683414_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=Sd-kgRvxUq0AX9vVaC5&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=t&oh=00_AfBwSvg3kLNnU9EAJvOww_ZnOWwwyMYeNxFIHAFc4dt1ug&oe=652AD3C8",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/309722889_766989031292663_1819876468365579357_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=49d041&_nc_ohc=m2OlSzzjmdgAX_e7GjT&_nc_ht=scontent-lax3-2.xx&cb_e2o_trans=t&oh=00_AfDB67VpS12jEw92DXsqt88P38chwM8-QWaCm4V7SOsoSA&oe=65299BF6",
        preview: false
      },
      {
        spotId: 8,
        url: "https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/366817365_988766942448203_384411908927400233_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=49d041&_nc_ohc=gOvm6uL00rIAX9VraIc&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=t&oh=00_AfBkcsiUIXUG2ztm763vLhzf4eyI95TLgtYnkI871f_HrA&oe=652A1E93",
        preview: false
      },
      {
        spotId: 9,
        url: "https://swinerton.com/wp-content/uploads/2019/02/JDZ2884a-1030x668.jpg",
        preview: true
      },
      {
        spotId: 9,
        url: "https://ihouse.ucsd.edu/_images/living/ug-eap-slideshow/18-townhouse-living-room2.png",
        preview: false
      },
      {
        spotId: 9,
        url: "https://lifeofwry.files.wordpress.com/2016/09/img_4807.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://scontent-lax3-2.xx.fbcdn.net/v/t1.18169-9/543826_10153246293150068_447989620_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=KdR-Kq_e0XIAX9GhDIs&_nc_ht=scontent-lax3-2.xx&cb_e2o_trans=t&oh=00_AfCwOTfXo244aRsjL3mwSLsLYz0ATh8H395ny-lFkskXnA&oe=654C8EF9",
        preview: false
      },
      {
        spotId: 9,
        url: "https://mithun.com/wp-content/uploads/2023/07/1425800_N96-1.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://ihouse.ucsd.edu/_images/living/scholars-vsr-slideshow/living-kitchen.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://www.sgh.com/wp-content/uploads/2022/09/178109_00_UCSD_N7_lrg.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://muir.ucsd.edu/_images/ResHallTour_cover.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://www.safdierabines.com/wp-content/uploads/2017/06/Eleanor-3.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://b1379941.smushcdn.com/1379941/wp-content/uploads/2019/04/UCSD-Eleanor-Roosevelt-College-Student-Housing-002.png?lossy=0&strip=1&webp=1",
        preview: false
      },
      {
        spotId: 9,
        url: "https://roosevelt.ucsd.edu/_images/ERC-Green1.jpg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://gw-advance-prod-us-east-1-system.s3.amazonaws.com/uploads/campaign/logo/641e1b740ad91d205bc34680/2a2f3be1-341d-4c2b-acbf-68662d438f98.jpeg",
        preview: false
      },
      {
        spotId: 9,
        url: "https://ihouse.ucsd.edu/_images/homepage/cta-living.jpg",
        preview: false
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'SpotImages'
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7, 8, 9] }
    }, {});
  }
};
