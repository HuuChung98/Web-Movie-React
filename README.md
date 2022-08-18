Project structure

- src
  - components
    + Là những component nhận vào props và render ra UI, sử dụng nhìu nơi trong ứng dụng.
    + Không xử lý logic ở các component này 
    + button, Card, Modal, Header, Text...

  - modules
    + Nơi chưas những component chính cho ứng dụng. Những xử lý logic như call API, xử lý nghiệp vụ
    + Có thể là 1 page, hoặc tập hợp 1 nhóm các tính năng

    - Home (module)
      - components: Chỉ chứa các components được sử dụng trực tiếp bên trong chính modules
      - Những component này có thể chứa các tác vụ chính: API....
      - pages: Componnent sẽ kết nối trực tiếp 



   - apis/services
    + Setup thư viện gọi API (axios)
    + Định nghĩa các function gọi API