import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';
class News extends Component {
    render() {
      console.log(dl);
        return (
            <div>
                <div>

  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">Trang danh sach tin</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* begin tintuc */}
  <div className="container">
    <div className="row mt-3">
      <NewsItem anh="http://sohanews.sohacdn.com/thumb_w/660/2019/6/23/5l3a9734-1561292154089625406184-crop-15612921682321301182496.jpg" tieuDe="Đầu Tuần Rạng Rỡ" noiDung="Sau tất cả, đừng biến tình yêu với HLV Park Hang-seo thành sự hằn thù.Vừa qua, doanh nhân Việt được đích thân bầu Đức tiến cử vào ghế Phó chủ tịch phụ trách tài chính và vận động tài trợ của VFF - ông Nguyễn Hoài Nam, cũng dính thông tin nợ lương đội bóng mà ông là chủ tịch - FK Sarajevo, khiến các cầu thủ đình công, không chịu tham gia trận đấu sơ loại Champions League với Celtic. Bản thân doanh nhân này cũng xác nhận thông tin này là có thật."></NewsItem>
      <NewsItem anh="http://sohanews.sohacdn.com/thumb_w/660/2019/6/23/5l3a9734-1561292154089625406184-crop-15612921682321301182496.jpg" tieuDe="Đầu Tuần Rạng Rỡ" noiDung="Sau tất cả, đừng biến tình yêu với HLV Park Hang-seo thành sự hằn thù.Vừa qua, doanh nhân Việt được đích thân bầu Đức tiến cử vào ghế Phó chủ tịch phụ trách tài chính và vận động tài trợ của VFF - ông Nguyễn Hoài Nam, cũng dính thông tin nợ lương đội bóng mà ông là chủ tịch - FK Sarajevo, khiến các cầu thủ đình công, không chịu tham gia trận đấu sơ loại Champions League với Celtic. Bản thân doanh nhân này cũng xác nhận thông tin này là có thật."></NewsItem>
      <NewsItem anh="http://sohanews.sohacdn.com/thumb_w/660/2019/6/23/5l3a9734-1561292154089625406184-crop-15612921682321301182496.jpg" tieuDe="Đầu Tuần Rạng Rỡ" noiDung="Sau tất cả, đừng biến tình yêu với HLV Park Hang-seo thành sự hằn thù.Vừa qua, doanh nhân Việt được đích thân bầu Đức tiến cử vào ghế Phó chủ tịch phụ trách tài chính và vận động tài trợ của VFF - ông Nguyễn Hoài Nam, cũng dính thông tin nợ lương đội bóng mà ông là chủ tịch - FK Sarajevo, khiến các cầu thủ đình công, không chịu tham gia trận đấu sơ loại Champions League với Celtic. Bản thân doanh nhân này cũng xác nhận thông tin này là có thật."></NewsItem>
      <NewsItem anh="http://sohanews.sohacdn.com/thumb_w/660/2019/6/23/5l3a9734-1561292154089625406184-crop-15612921682321301182496.jpg" tieuDe="Đầu Tuần Rạng Rỡ" noiDung="Sau tất cả, đừng biến tình yêu với HLV Park Hang-seo thành sự hằn thù.Vừa qua, doanh nhân Việt được đích thân bầu Đức tiến cử vào ghế Phó chủ tịch phụ trách tài chính và vận động tài trợ của VFF - ông Nguyễn Hoài Nam, cũng dính thông tin nợ lương đội bóng mà ông là chủ tịch - FK Sarajevo, khiến các cầu thủ đình công, không chịu tham gia trận đấu sơ loại Champions League với Celtic. Bản thân doanh nhân này cũng xác nhận thông tin này là có thật."></NewsItem>    
    </div>
  </div>
  {/* end tintuc */}
</div>


            </div>
        );
    }
}

export default News;