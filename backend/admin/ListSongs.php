<?php 
    require('header.php');

    require_once('model/DBConfig.php');
    $db = new Database();
?>

<div class="nav-left-sidebar sidebar-dark">
    <div class="menu-list">
        <nav class="navbar navbar-expand-lg navbar-light">
            <a class="d-xl-none d-lg-none" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav flex-column">
                    <li class="nav-divider">QUẢN LÝ</li>

                    <li class="nav-item">
                        <a class="nav-link" href="index.php" data-target="#submenu-2" aria-controls="submenu-2"><i
                                class="fa fa-fw fa-user-circle"></i>Trang chủ</a>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link active" href="ListSongs.php" data-target="#submenu-3"
                            aria-controls="submenu-3"><i class="fas fa-fw fa-file-audio"></i>Bài hát</a>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ListArtists.php" data-target="#submenu-3" aria-controls="submenu-3"><i
                                class="fas fa-fw fa-user-md"></i>Nghệ sĩ</a>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ListCategory.php" data-target="#submenu-3"
                            aria-controls="submenu-3"><i class="fas fa-fw fa-list-alt"></i>Thể loại</a>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-6" aria-controls="submenu-6"><i class="fas fa-fw fa-user"></i>Người
                            dùng</a>
                        <div id="submenu-6" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="">Danh sách quản trị viên</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="">Danh sách thành viên</a>
                                </li>
                            </ul>
                        </div>
                    </li>



                    <li class="nav-divider">
                        Thành phần giao diện
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-2" aria-controls="submenu-2"><i class="fa fa-fw fa-rocket"></i>UI
                            Elements</a>
                        <div id="submenu-2" class="submenu collapse">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/cards.html">Cards <span
                                            class="badge badge-secondary">New</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/general.html">General</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/carousel.html">Carousel</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/listgroup.html">List Group</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/typography.html">Typography</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/accordions.html">Accordions</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/tabs.html">Tabs</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-3" aria-controls="submenu-3"><i
                                class="fas fa-fw fa-chart-pie"></i>Chart</a>
                        <div id="submenu-3" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-c3.html">C3 Charts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-chartist.html">Chartist Charts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-charts.html">Chart</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-morris.html">Morris</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-sparkline.html">Sparkline</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/chart-gauge.html">Guage</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item ">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-4" aria-controls="submenu-4"><i
                                class="fab fa-fw fa-wpforms"></i>Forms</a>
                        <div id="submenu-4" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/form-elements.html">Form Elements</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/form-validation.html">Parsely Validations</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/multiselect.html">Multiselect</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-5" aria-controls="submenu-5"><i
                                class="fas fa-fw fa-table"></i>Tables</a>
                        <div id="submenu-5" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/general-table.html">General Tables</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/data-tables.html">Data Tables</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-6" aria-controls="submenu-6"><i
                                class="fas fa-fw fa-file"></i>Pages</a>
                        <div id="submenu-6" class="submenu collapse">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/invoice.html">Invoice</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/blank-page.html">Blank Page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/blank-page-header.html">Blank Page Header</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/login.html">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/404-page.html">404 page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/sign-up.html">Sign up Page</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/forgot-password.html">Forgot Password</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/pricing.html">Pricing Tables</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/timeline.html">Timeline</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/calendar.html">Calendar</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/sortable-nestable-lists.html">Sortable/Nestable
                                        List</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/widgets.html">Widgets</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/media-object.html">Media Objects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/cropper-image.html">Cropper</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/color-picker.html">Color Picker</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-7" aria-controls="submenu-7"><i class="fas fa-fw fa-inbox"></i>Apps
                            <span class="badge badge-secondary">New</span></a>
                        <div id="submenu-7" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/inbox.html">Inbox</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/email-details.html">Email Detail</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/email-compose.html">Email Compose</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/message-chat.html">Message Chat</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-8" aria-controls="submenu-8"><i
                                class="fas fa-fw fa-columns"></i>Icons</a>
                        <div id="submenu-8" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-fontawesome.html">FontAwesome Icons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-material.html">Material Icons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-simple-lineicon.html">Simpleline Icon</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-themify.html">Themify Icon</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-flag.html">Flag Icons</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/icon-weather.html">Weather Icon</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-9" aria-controls="submenu-9"><i
                                class="fas fa-fw fa-map-marker-alt"></i>Maps</a>
                        <div id="submenu-9" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/map-google.html">Google Maps</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="pages/map-vector.html">Vector Maps</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                            data-target="#submenu-10" aria-controls="submenu-10"><i class="fas fa-f fa-folder"></i>Menu
                            Level</a>
                        <div id="submenu-10" class="collapse submenu">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Level 1</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" data-toggle="collapse" aria-expanded="false"
                                        data-target="#submenu-11" aria-controls="submenu-11">Level 2</a>
                                    <div id="submenu-11" class="collapse submenu">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Level 1</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#">Level 2</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Level 3</a>
                                </li>
                            </ul>
                        </div>
                    </li>

                </ul>
            </div>
        </nav>
    </div>
</div>

<div class="dashboard-wrapper">
    <div class="dashboard-ecommerce">
        <div class="container-fluid dashboard-content ">
            <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="page-header">
                        <h2 class="pageheader-title">Quản lý bài hát</h2>
                        <div class="page-breadcrumb">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">Bài hát</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Danh sách bài hát</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div>

            </div>

            <div class="input-group mb-3" style="margin: 1.2%">
                <input type="text" class="form-control" placeholder="Tìm kiếm...">
                <div class="input-group-append">
                    <button type="button" class="btn btn-primary">Tìm kiếm</button>
                </div>

                <div class="input-group-append" style="margin-left: 1%; margin-right: 8%;">
                    <button type="button" class="btn btn-dark">Hiện tất cả</button>
                </div>
                <div class="input-group-append" style="margin-right: 2.5%;">
                    <a href="<?php echo $db->mergeURL('action=them'); ?>">
                        <button type="button" class="btn btn-success"><span class="fas fa-plus"></span> Thêm</button>
                    </a>
                </div>

            </div>

            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="card">
                    <h5 class="card-header">Danh sách bài hát</h5>
                    <div class="card-body">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">Tên bài hát</th>
                                    <th scope="col">Nghệ sĩ</th>
                                    <th scope="col">Link audio</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" class="btn btn-warning"><span
                                                    class="fas fa-edit"></span> Sửa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-danger"><span
                                                    class="fas fa-times-circle"></span> Xóa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-info"><span class="fab fa-elementor"></span> Xem bình luận</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" class="btn btn-warning"><span
                                                    class="fas fa-edit"></span> Sửa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-danger"><span
                                                    class="fas fa-times-circle"></span> Xóa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-info"><span class="fab fa-elementor"></span> Xem bình luận</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" class="btn btn-warning"><span
                                                    class="fas fa-edit"></span> Sửa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-danger"><span
                                                    class="fas fa-times-circle"></span> Xóa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-info"><span class="fab fa-elementor"></span> Xem bình luận</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" class="btn btn-warning"><span
                                                    class="fas fa-edit"></span> Sửa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-danger"><span
                                                    class="fas fa-times-circle"></span> Xóa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-info"><span class="fab fa-elementor"></span> Xem bình luận</button>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <a href="#">
                                            <button type="button" class="btn btn-warning"><span
                                                    class="fas fa-edit"></span> Sửa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-danger"><span
                                                    class="fas fa-times-circle"></span> Xóa</button>
                                        </a>
                                        <a href="#" style="margin-left: 5%;">
                                            <button type="button" class="btn btn-info"><span class="fab fa-elementor"></span> Xem bình luận</button>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                    <nav aria-label="Page navigation example" style="margin: 1.3%">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Trang trước</a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link " href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Trang sau</a></li>
                        </ul>
                    </nav>

                </div>
            </div>

        </div>



    </div>
    <!-- ============================================================== -->
    <!-- end wrapper  -->
    <!-- ============================================================== -->
</div>
<!-- ============================================================== -->
<!-- end main wrapper  -->
<!-- ============================================================== -->
<!-- Optional JavaScript -->
<!-- jquery 3.3.1 -->
<script src="assets/vendor/jquery/jquery-3.3.1.min.js"></script>
    <!-- bootstap bundle js -->
    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.js"></script>
    <!-- slimscroll js -->
    <script src="assets/vendor/slimscroll/jquery.slimscroll.js"></script>
    <!-- main js -->
    <script src="assets/libs/js/main-js.js"></script>
    <!-- chart chartist js -->
    <script src="assets/vendor/charts/chartist-bundle/chartist.min.js"></script>
    <!-- sparkline js -->
    <script src="assets/vendor/charts/sparkline/jquery.sparkline.js"></script>
    <!-- morris js -->
    <script src="assets/vendor/charts/morris-bundle/raphael.min.js"></script>
    <script src="assets/vendor/charts/morris-bundle/morris.js"></script>
    <!-- chart c3 js -->
    <script src="assets/vendor/charts/c3charts/c3.min.js"></script>
    <script src="assets/vendor/charts/c3charts/d3-5.4.0.min.js"></script>
    <script src="assets/vendor/charts/c3charts/C3chartjs.js"></script>
    <script src="assets/libs/js/dashboard-ecommerce.js"></script>
</body>

</html>