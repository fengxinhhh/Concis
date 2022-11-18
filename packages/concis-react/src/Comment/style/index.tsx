import styled from 'styled-components';
import { commonStyle } from '../../styles/common';

const {
  concisTransformMd,
  concisRadiusLg,
  concisTransformSm,
  concisTransformXs,
  concisFontMd,
  concisFontXs,
} = commonStyle;

const darkCommentStyle = `
  .comment-content {
    border-top: 1px solid #484849;
  }
`;

const CommentStyle = styled.div<{ commentAlign }>`
  .concis-comment,
  .concis-dark-comment {
    display: flex;
    justify-content: flex-start;
    margin: ${concisTransformMd} 0;

    .avatar {
      box-sizing: border-box;
      margin-top: ${concisTransformMd};
      border-radius: ${concisRadiusLg};
    }

    .comment-content {
      align-items: center;
      box-sizing: border-box;
      width: 100%;
      margin-left: ${concisTransformSm};
      padding-top: ${concisTransformMd};
      border-top: 1px solid #e5e9ef;

      &-header {
        display: flex;
        align-items: center;
        justify-content: ${({ commentAlign }) =>
          commentAlign === 'left' ? 'flex-start' : 'space-between'};

        .author {
          display: flex;
          color: #4e5969;
          font-size: ${concisFontMd};

          .extra-header {
            margin-left: ${concisTransformSm};
          }
        }

        .date-time {
          margin-left: ${concisTransformSm};
          color: #80909c;
          font-size: ${concisFontXs};
        }
      }

      .content {
        margin: ${concisTransformXs} 0 ${concisTransformSm};
        font-size: ${concisFontMd};
      }

      &-actions {
        display: flex;
      }
    }
  }

  ${darkCommentStyle}
`;

export { CommentStyle };
