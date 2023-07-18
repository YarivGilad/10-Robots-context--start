export const flexbox = ({
  dir = "row",
  jc = "center",
  ai = "center",
  wr = "nowrap",
} = {}) => `
      display: flex;
      flex-direction: ${dir};
      justify-content: ${jc};
      align-items: ${ai};
      flex-wrap: ${wr};
  `;

// flexbox();
// flexbox({ai:"flex-start"});
