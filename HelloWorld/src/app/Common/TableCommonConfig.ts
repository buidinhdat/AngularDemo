export class TableCommonConfig{

  public static dtOptions: DataTables.Settings = {
    pagingType: 'full_numbers',
    pageLength: 5,
    lengthMenu : [5, 10, 25,50],
    processing: true,
    columnDefs: [{
      targets: 0
    }],
    language: {
      processing: "Đang xử lý...",
      search: "Tìm kiếm:",
      lengthMenu: "Số bản ghi/trang _MENU_ ",
      info: "Hiển thị từ _START_ đến _END_ trên tổng _TOTAL_ bản ghi",
      infoEmpty: "Không hiển thị mục nào.",
      infoFiltered: "(lọc _MAX_ tổng số phần tử)",
      infoPostFix: "",
      loadingRecords: "",
      zeroRecords: "Không có dữ liệu được tìm thấy",
      emptyTable: "Không có dữ liệu",
      paginate: {
        first: "Trang đầu",
        previous: "Trang trước",
        next: "Tiếp theo",
        last: "Trang cuối"
      },
      aria: {
        sortAscending: ": Kích hoạt để sắp xếp bảng theo thứ tự tăng dần",
        sortDescending: ": Kích hoạt để sắp xếp bảng theo thứ tự giảm dần"
      }
    },
    destroy:true

  };


}
