// import React, { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import './MainContent.scss';
// import SlideShow from '../slide-show/Slideshow';
// import Grid from '../grid/Grid';
// import Paginate from '../paginate/Paginate';
// import { IMAGE_URL } from '../../../services/movies';
// export const MainContent = (props) => {
//   const { list } = props;
//   // console.log("list"+list);
//   const imagesArray = [
//     {
//       url:
//         'data:image/jpeg;base64,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'
//     },
//     {
//       url:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR_WWKhpCGf00bv8H1D8DGlHqAc2ub2Ncjrlg&usqp=CAU'
//     },
//     {
//       url:
//         'data:image/jpeg;base64,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'
//     },
//     {
//       url:
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQX2CFmHeWwV_ipgfUHBYYb24Ezg_AxuVwBBg&usqp=CAU'
//     }
//   ];
//   const [currentPage, setCurrentPage] = useState(1);
//   const [images, setImages] = useState([]);
//   const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);
//   //console.log(randomMovies);
//   useEffect(() => {
//     console.log(list)
//     if (randomMovies.length) {
//       const IMAGES = [{
//         id: 1,
//         url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`
//       },
//       {
//         id: 2,
//         url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`
//       },
//       {
//         id: 3,
//         url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`
//       },
//       {
//         id: 1,
//         url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`
//       }
//       ];
//       setImages(IMAGES);
//     }
//   }, []);

//   const paginate = (type) => {
//     if (type === 'prev' && currentPage > 1) {
//       setCurrentPage((prev) => prev - 1);
//     } else {
//       setCurrentPage((prev) => prev + 1);
//     }
//   };
//   return (
//     <div className="main-content">
//       <SlideShow images={images} auto={true} showArrows={true} />
//       <div className="grid-movie-title">
//         <div className="movieType">Now Playing</div>
//         <div className="paginate">
//           <Paginate currentPage={currentPage} totalPages={10} paginate={paginate} />
//         </div>
//       </div>
//       <Grid images={imagesArray} />
//     </div>
//   );
// };

// MainContent.propTypes = {
//   list: PropTypes.array.isRequired
// };
// const mapStateToProps = (state) => ({
//   list: state.movies.list
// });
// export default connect(
//   mapStateToProps,{}

// )(MainContent);
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './MainContent.scss';
import Slideshow from '../slide-show/Slideshow';
import Paginate from '../paginate/Paginate';
import Grid from '../grid/Grid';
import { IMAGE_URL } from '../../../services/movies';
import { getMovies, setResponsePageNumber } from '../../../redux/actions/movies';

const MainContent = (props) => {
  const { list, movieType, totalPages, page, getMovies, setResponsePageNumber } = props;
  const [currentPage, setCurrentPage] = useState(page);
  const [images, setImages] = useState([]);
  const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);

  const HEADER_TYPE = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
  };

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}${randomMovies[0].backdrop_path}`
        },
        {
          id: 2,
          url: `${IMAGE_URL}${randomMovies[1].backdrop_path}`
        },
        {
          id: 3,
          url: `${IMAGE_URL}${randomMovies[2].backdrop_path}`
        },
        {
          id: 4,
          url: `${IMAGE_URL}${randomMovies[3].backdrop_path}`
        }
      ];
      setImages(IMAGES);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCurrentPage(page);
    // eslint-disable-next-line
  }, [page, totalPages]);

  const paginate = (type) => {
    let pageNumber = currentPage;
    if (type === 'prev' && currentPage >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrentPage(pageNumber);
    setResponsePageNumber(pageNumber, totalPages);
    getMovies(movieType, pageNumber);
  };

  return (
    <div className="main-content">
      <Slideshow images={images} auto={true} showArrows={true} />
      <div className="grid-movie-title">
        <div className="movieType">{HEADER_TYPE[movieType]}</div>
        <div className="paginate">
          <Paginate currentPage={currentPage} totalPages={totalPages} paginate={paginate} />
        </div>
      </div>
      <Grid />
    </div>
  );
};

MainContent.propTypes = {
  list: PropTypes.array.isRequired,
  movieType: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  getMovies: PropTypes.func.isRequired,
  setResponsePageNumber: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  list: state.movies.list,
  movieType: state.movies.movieType,
  totalPages: state.movies.totalPages,
  page: state.movies.page
});

export default connect(mapStateToProps, { getMovies, setResponsePageNumber })(MainContent);
