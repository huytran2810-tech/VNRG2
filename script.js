// SOURCE_CONTENT - Nội dung HTML sạch từ DOCX với định dạng in đậm
const SOURCE_CONTENT = `
<h2><strong>Mở đầu & Bối cảnh</strong></h2>
<p><strong>Trình bày hoàn cảnh lịch sử sau 1954, lý do cần cải cách ruộng đất:a) </strong><strong>Hoàn cảnh chung:</strong></p>
<p>Đất nước bị chia cắt: Việt Nam tạm thời bị chia cắt thành hai miền.</p>
<p>Miền Bắc hoàn toàn giải phóng: Miền Bắc được hoàn toàn giải phóng và chuyển sang giai đoạn phục hồi kinh tế, cải tạo xã hội chủ nghĩa, chuẩn bị chuyển cách mạng miền Nam từ thế giữ gìn lực lượng sang thế tiến công.</p>
<p>Miền Nam thành chế độ thuộc địa kiểu mới: Miền Nam vẫn nằm dưới sự cai trị khác nhau và miền Nam trở thành một quốc gia thuộc địa kiểu mới của Mỹ. Mỹ và bè lũ tay sai đã phá hoại Hiệp định Giơnevơ và tìm cách chia cắt lâu dài Việt Nam.</p>
<p><strong>Lý do cần cải cách ruộng đất (ở miền Bắc)</strong></p>
<p>Sau 1954, Đảng Cộng sản Việt Nam đã lãnh đạo khôi phục và phát triển sản xuất nông nghiệp ở miền Bắc. Trong bối cảnh này, việc tiếp tục và hoàn thành cải cách ruộng đất là nhiệm vụ cấp thiết để tạo cơ sở vững chắc cho việc xây dựng chế độ mới:</p>
<p><strong>Hoàn thành mục tiêu dân chủ và xóa bỏ chế độ phong kiến:</strong></p>
<p>Mặc dù đã tiến hành cải cách ruộng đất từ năm 1953, việc hoàn thành cải cách ruộng đất sau 1954 là để <strong>bảo đảm thực hiện thắng lợi nhiệm vụ cải cách ruộng đất</strong>.</p>
<p>Mục tiêu là <strong>xóa bỏ hoàn toàn chế độ phong kiến sở hữu ruộng đất</strong>.</p>
<p>Việc này đã giúp chuyển giao hơn <strong>810.000 héc-ta ruộng đất</strong> cho <strong>hơn 2 triệu hộ nông dân lao động</strong>, hiện thực hóa khẩu hiệu "Người cày có ruộng".</p>
<p><strong>Phục vụ nhiệm vụ phục hồi và phát triển kinh tế:</strong></p>
<p>Việc khôi phục và phát triển sản xuất nông nghiệp là trọng tâm.</p>
<p>Cải cách ruộng đất được kết hợp với <strong>vận động đổi công, hợp tác xã sản xuất</strong>, nhằm tạo điều kiện giải quyết những vấn đề cơ bản trong nền kinh tế quốc dân, góp phần ổn định chính trị, trật tự an ninh xã hội.</p>
<p><strong>Củng cố nền tảng xã hội chủ nghĩa ở miền Bắc:</strong></p>
<p>Thắng lợi của cải cách ruộng đất là một trong những cơ sở quan trọng nhất để Đảng lãnh đạo miền Bắc <strong>bước quá độ lên chủ nghĩa xã hội</strong>.</p>
<p>Việc phân phối lại ruộng đất củng cố lòng tin của nông dân (lực lượng đông đảo nhất) vào Đảng và chính quyền, tạo nền tảng chính trị-xã hội vững chắc để miền Bắc tiến lên</p>
<p><strong>Nêu chủ trương chung của Đảng và Nhà nước trước năm 1953.</strong></p>
<p><strong>1. Đẩy mạnh phát triển cuộc kháng chiến về mọi mặt (từ đầu năm 1951):</strong></p>
<p>Đảng và Chính phủ đã lãnh đạo <strong>đẩy mạnh toàn diện công cuộc phát triển lực lượng, củng cố và tăng cường sức mạnh hậu phương kháng chiến</strong>.Chủ trương này được thực hiện trong tất cả các mặt: chính trị, kinh tế, văn hóa, xã hội.</p>
<p>Đảng và Chính phủ đặc biệt chú trọng các nhiệm vụ sau:</p>
<p><strong>Tăng gia sản xuất, thực hành tiết kiệm, khắc phục khó khăn, hăng hái lao động, tăng gia sản xuất</strong> để tự túc một phần lương thực, thực phẩm.</p>
<p><strong>Phục vụ, chi viện đảm bảo đạn dược, thuốc men, quân trang, quân dụng</strong> cung cấp đầy đủ cho bộ đội.</p>
<p><strong>Chấn chỉnh và đảm bảo thu thuế khóa</strong>, tài chính, xây dựng nghiệp đoàn thương nghiệp, ngân hàng.</p>
<p>Thực hiện <strong>từng bước cải cách ruộng đất, chấn chỉnh thuế nông nghiệp, chấn chỉnh chính sách địa tô</strong>.</p>
<p>Cải tạo và phát triển các mặt <strong>y tế, giáo dục</strong>, xây dựng nền nếp sống mới, củng cố mặt trận dân tộc thống nhất.</p>
<p><strong>2. Chiến lược quân sự và ngoại giao (trước 1953):</strong></p>
<p>Đầu năm 1951, để đáp lại Kế hoạch Đờ Lát Đờ Tátxinhi (De Lattre de Tassigny) của Pháp, Tổng chủ trương của Đảng là đưa <strong>quân đội chủ lực từ các chiến dịch lớn dần rút vào vùng đồng bằng Bắc Bộ, tiêu hao sinh lực địch, tạo điều kiện phát triển cuộc chiến tranh du kích</strong>.</p>
<p>Tiếp đó, Đảng đã mở Chiến dịch Hòa Bình (12-1951) và Chiến dịch Tây Bắc Thu Đông 1952, nhằm <strong>tiêu diệt một bộ phận sinh lực địch, giải phóng một phần vùng Tây Bắc, phá âm mưu lập "Xứ Thái tự trị"</strong> của thực dân Pháp.</p>
<p>Cũng trong thời kỳ này, chiến tranh du kích được phát triển mạnh ở địa bàn các tỉnh như Tây Nguyên, Bắc Quảng Nam, Khánh Hòa, Nam Bình Thuận.</p>
<p>Năm 1953, Chủ tịch Hồ Chí Minh đã tuyên bố về lập trường của Việt Nam: "Chính phủ Pháp phải thật thà tôn trọng nền độc lập thật sự của nước Việt Nam", đồng thời chỉ rõ <strong>chính quyền Pháp và tay sai phải rút khỏi Việt Nam</strong>. Tuyên bố này đã mở đường cho đấu tranh ngoại giao tại Hội nghị Giơnevơ.</p>
<p><strong>3. Chủ trương về cải cách ruộng đất (bước đầu thực hiện trước 1953):</strong></p>
<p>Đảng đã <strong>tiến hành từng bước cải cách ruộng đất</strong> trước năm 1953 như một phần của chính sách chấn chỉnh thuế nông nghiệp và địa tô.</p>
<p>Tuy nhiên, đến <strong>tháng 12 năm 1953</strong>, tại kỳ họp thứ 3, Quốc hội khóa I mới chính thức thông qua <strong>Luật cải cách ruộng đất</strong>, và đó là thời điểm Đảng đẩy mạnh thực hiện cải cách ruộng đất. (Do đó, các hoạt động cải cách toàn diện, quyết liệt diễn ra vào năm 1953 trở đi, nhưng chủ trương và bước đi đầu tiên đã có từ trước đó).</p>
<p>=> Tóm lại, trước năm 1953, chủ trương chung của Đảng và Nhà nước là <strong>dốc toàn lực lượng và tài nguyên vào công cuộc kháng chiến, kiên quyết chống thực dân Pháp xâm lược, đồng thời xây dựng và củng cố hậu phương vững chắc</strong>, trong đó có việc từng bước thực hiện các chính sách dân chủ và kinh tế-xã hội như cải cách ruộng đất sơ bộ.</p>
<p><strong>3) </strong><strong>Vai trò mục tiêu "</strong><strong>Cải cách Ruộng đất:</strong><strong> .</strong></p>
<p><strong>1. Mục tiêu Cơ bản và Hoàn thành Dân chủ</strong></p>
<p><strong>Hoàn thành mục tiêu "Người cày có ruộng":</strong> Mục tiêu tiên quyết của việc đẩy mạnh cải cách dân chủ, triệt để giảm tô, giảm tức và tiến tới cải cách ruộng đất là <strong>thực hiện mục tiêu người cày có ruộng</strong>.</p>
<p><strong>Xóa bỏ chế độ phong kiến:</strong> Cải cách ruộng đất nhằm <strong>xóa bỏ hoàn toàn chế độ phong kiến sở hữu ruộng đất</strong>.</p>
<p><strong>Phân phối lại ruộng đất:</strong> Chủ trương về ruộng đất là tịch thu, trưng thu, mua và đem ruộng đất đó <strong>chia cho cố nông, bần nông và trung nông lớp dưới</strong> là những người không có hoặc thiếu ruộng cày cấy.</p>
<p><strong>2. Vai trò Kinh tế - Xã hội</strong></p>
<p><strong>Thúc đẩy Sản xuất và Cải thiện Đời sống:</strong> Chủ trương cải cách ruộng đất đã tạo ra <strong>chuyển biến lớn về kinh tế, chính trị ở nông thôn</strong>. Việc này đã <strong>thúc đẩy sức sản xuất phát triển</strong> và <strong>cải thiện đời sống vật chất và tinh thần của người nông dân Việt Nam</strong>.</p>
<p><strong>Ổn định xã hội sau 1954:</strong> Sau khi miền Bắc hoàn toàn giải phóng, việc khôi phục sản xuất nông nghiệp được kết hợp với cải cách ruộng đất và vận động đổi công, hợp tác xã sản xuất. Điều này <strong>tạo điều kiện giải quyết những vấn đề cơ bản trong nền kinh tế quốc dân, góp phần ổn định chính trị, trật tự an ninh xã hội</strong>.</p>
<p><strong>3. Vai trò Chính trị và Phục vụ Kháng chiến</strong></p>
<p><strong>Thúc đẩy thắng lợi Kháng chiến:</strong> Việc đẩy mạnh cải cách ruộng đất đã góp phần <strong>thúc đẩy kháng chiến mau thắng lợi</strong>.</p>
<p><strong>Huy động lực lượng:</strong> Thắng lợi (của cải cách ruộng đất) đã làm cho nông dân (cụ thể là cố nông, bần nông, và trung nông lớp dưới) <strong>nổi lên tiên tiến, hăng hái tự nguyện</strong>.</p>
<p><strong>Đóng góp vào Chiến dịch Điện Biên Phủ:</strong> Sự nhiệt tình của nông dân đã giúp <strong>góp phần tích cực động viên sức người, sức của cho Chiến dịch Điện Biên Phủ</strong>. Đây là một trong những cơ sở quan trọng nhất để huy động mọi nguồn lực vào cuộc kháng chiến.</p>
<p><strong>Củng cố Chính quyền:</strong> Việc cải cách ruộng đất và các chính sách dân chủ khác đã giúp <strong>củng cố mặt trận dân tộc thống nhất</strong>.</p>

<h2><strong>II. Chính sách 1953</strong></h2>
<p>1.Chính sách năm 1953 (Chính sách Ruộng đất 1953)</p>
<p><strong>Dàn ý:</strong></p>
<p><strong>Bối cảnh ra đời</strong>:</p>
<p>Kháng chiến chống Pháp bước vào giai đoạn quyết định (chiến dịch Đông Xuân 1953–1954).</p>
<p>Yêu cầu tăng cường hậu phương, động viên nhân dân nông thôn.</p>
<p><strong>Nội dung chính của chính sách</strong>:</p>
<p>Thực hiện cải cách ruộng đất tại miền Bắc, từng bước tiến hành.</p>
<p>Trọng tâm là <strong>giảm tô, giảm tức</strong> để chuẩn bị cho <strong>tịch thu, trưng thu ruộng đất</strong> của địa chủ phản động.</p>
<p><strong>Mục tiêu</strong>:</p>
<p>Giải phóng lực lượng sản xuất, tạo cơ sở chính trị vững chắc cho cách mạng.</p>
<p>Củng cố khối liên minh công – nông.</p>
<p><strong>Key chính:</strong></p>
<p>"<strong>Ruộng đất về tay dân cày</strong>" – Khẩu hiệu xuyên suốt.</p>
<p>Chính sách mang tính <strong>cách mạng dân chủ mới</strong>, chuyển biến từ tuyên truyền sang hành động cụ thể.</p>
<p>Từng bước tiến lên: <strong>giảm tô → cải cách ruộng đất triệt để</strong>.</p>
<p><strong>Dẫn chứng:</strong></p>
<p>Chỉ thị của Ban Chấp hành Trung ương tháng 5/1953: Xác định rõ đường lối cải cách ruộng đất.</p>
<p>Trong một số vùng giải phóng (Thái Nguyên, Tuyên Quang...), nhân dân được giảm 25–50% tô tức.</p>
<p><strong>2. Hội nghị Trung ương 4, Trung ương 5 và Cương lĩnh ruộng đất 23 điều</strong></p>
<p><strong>Dàn ý:</strong></p>
<p><strong>Hội nghị TW 4 (12/1951)</strong>:</p>
<p>Bắt đầu đặt vấn đề cải cách ruộng đất như một nhiệm vụ chính trị - kinh tế cấp bách.</p>
<p>Đề ra các bước chuẩn bị: điều tra xã hội học nông thôn, tuyên truyền giáo dục, đào tạo cán bộ.</p>
<p><strong>Hội nghị TW 5 (tháng 11/1953)</strong>:</p>
<p>Quyết định thực hiện <strong>Cải cách ruộng đất triệt để</strong> ở vùng tự do và giải phóng.</p>
<p>Xác định rõ đối tượng: địa chủ phong kiến phản động.</p>
<p>Đưa ra các biện pháp cụ thể: tịch thu ruộng đất, chia lại cho dân cày nghèo.</p>
<p><strong>Cương lĩnh ruộng đất 23 điều (23 điều về cải cách ruộng đất)</strong>:</p>
<p>Ban hành để thống nhất chủ trương và chỉ đạo triển khai.</p>
<p>Bao gồm 3 nội dung chính:</p>
<p><strong>Tịch thu ruộng đất của địa chủ phản động, chia cho dân cày nghèo.</strong></p>
<p><strong>Trưng thu ruộng đất của địa chủ thường.</strong></p>
<p><strong>Giữ lại ruộng đất của nông dân, tư sản nhỏ.</strong></p>
<p>Nhấn mạnh quyền làm chủ ruộng đất của nông dân.</p>
<p><strong>Key chính:</strong></p>
<p>Phân hóa địa chủ → xác định rõ kẻ thù chính.</p>
<p>Kết hợp giữa <strong>đấu tranh giai cấp</strong> và <strong>xây dựng chính quyền nông thôn</strong>.</p>
<p>Hệ thống hóa lý luận cải cách bằng 23 điều rõ ràng, chặt chẽ.</p>
<p><strong>Dẫn chứng:</strong></p>
<p>Hồ sơ của Đảng ghi nhận tại TW 5: xác định khẩu hiệu "Người cày có ruộng" đi vào hiện thực.</p>
<p>Bản "Cương lĩnh 23 điều" là tài liệu cốt lõi cho mọi cuộc cải cách giai đoạn 1953–1956.</p>
<p><strong>3. Quốc hội thông qua Luật cải cách ruộng đất (4/12/1953), Chủ tịch Hồ Chí Minh ký Sắc lệnh số 197-SL (19/12/1953)</strong></p>
<p><strong>Dàn ý:</strong></p>
<p><strong>Quốc hội khóa I, kỳ họp thứ 3 (tháng 12/1953)</strong>:</p>
<p>Thông qua <strong>Luật cải cách ruộng đất</strong> – văn bản pháp lý cao nhất thời kỳ này.</p>
<p>Khẳng định tính hợp pháp của việc tịch thu, trưng thu, chia lại ruộng đất.</p>
<p>Luật có tính cách mạng sâu sắc, đụng chạm quyền lợi giai cấp địa chủ.</p>
<p><strong>Chủ tịch Hồ Chí Minh ký Sắc lệnh 197-SL ngày 19/12/1953</strong>:</p>
<p>Chính thức công bố Luật.</p>
<p>Tạo hành lang pháp lý cho việc triển khai trên thực địa.</p>
<p><strong>Key chính:</strong></p>
<p><strong>Luật hóa chính sách cải cách</strong> – từ chủ trương Đảng sang chính sách Nhà nước.</p>
<p>Khẳng định quyền làm chủ ruộng đất của nông dân.</p>
<p>Bước ngoặt pháp lý trong cách mạng dân tộc – dân chủ.</p>
<p><strong>Dẫn chứng:</strong></p>
<h3>Sắc lệnh 197-SL ghi rõ: "Những ruộng đất tịch thu từ địa chủ phản động sẽ chia cho nông dân không bồi hoàn."</h3>
<p>Luật quy định tổ chức "đội cải cách ruộng đất" làm nòng cốt triển khai tại cơ sở.</p>
<p><strong>4. Chính sách giảm tô, giảm tức</strong></p>
<p><strong>Dàn ý:</strong></p>
<p><strong>Khái niệm</strong>:</p>
<p>"Tô" là phần nông dân phải nộp cho địa chủ khi thuê ruộng đất.</p>
<p>"Tức" là phần sản lượng hoặc tiền phải trả thêm, ngoài tô (nặng hơn tô).</p>
<p><strong>Nội dung chính sách</strong>:</p>
<p>Giảm 25–50% mức tô, tức ở các vùng tự do, căn cứ địa.</p>
<p>Giai đoạn chuyển tiếp để tránh sốc trước cải cách triệt để.</p>
<p>Thực hiện trước tại vùng có điều kiện chính trị – quân sự ổn định.</p>
<p><strong>Ý nghĩa</strong>:</p>
<p>Gây dựng lòng tin trong dân chúng.</p>
<p>Cô lập địa chủ, lôi kéo trung nông.</p>
<p>Làm cơ sở cho cải cách triệt để sau này.</p>
<p><strong>Key chính:</strong></p>
<p><strong>"Trước khi đánh thì chia" – Chính sách mềm hóa, chuẩn bị cải cách triệt để.</strong></p>
<p>Đòn "mở đường" trong tiến trình cải cách.</p>
<p>Giảm căng thẳng xã hội, tránh xung đột bạo lực ban đầu.</p>
<p><strong>Dẫn chứng:</strong></p>
<p>Theo báo cáo của Bộ Nông nghiệp năm 1954: gần 2 triệu ha ruộng đất đã được giảm tô cho nông dân.</p>
<p>Có nơi, tô tức giảm từ 50% còn 30%, giúp dân tăng sản lượng lúa vụ mùa (1953–1954).</p>
<p>Tổng kết (gợi ý mở rộng hoặc kết luận bài viết):</p>
<p>Chính sách ruộng đất 1953 là bước ngoặt quan trọng trong cách mạng nông thôn Việt Nam.</p>
<p>Cải cách ruộng đất không chỉ có ý nghĩa kinh tế mà còn là <strong>biện pháp chính trị – xã hội</strong> sâu rộng, giúp xây dựng lực lượng hậu phương, đoàn kết toàn dân.</p>
<p>Tuy có sai lầm trong tổ chức thực hiện sau này, nhưng về <strong>chủ trương</strong>, đó là một chính sách cách mạng phù hợp với bối cảnh lịch sử.</p>

<h2><strong>III. Chính sách triển khai 1954–1955</strong></h2>
<p><strong>Chính sách triển khai (1954 – 1955)</strong></p>
<p>Sau khi Quốc hội khóa I thông qua Luật Cải cách Ruộng đất ngày 04/12/1953 và Chủ tịch Hồ Chí Minh ký Sắc lệnh 197-SL ngày 19/12/1953, công cuộc cải cách ruộng đất chính thức được triển khai rộng khắp miền Bắc. Trong giai đoạn 1954–1955, chính sách được tăng tốc triển khai với các nội dung chính:</p>
<p><strong>Mục tiêu</strong></p>
<p>Xóa bỏ chế độ chiếm hữu ruộng đất phong kiến, thủ tiêu quyền bóc lột của địa chủ.</p>
<p>Thực hiện khẩu hiệu "Người cày có ruộng", trao lại quyền sở hữu đất đai cho nông dân lao động.</p>
<p>Củng cố liên minh công – nông, làm nền tảng cho xây dựng CNXH ở miền Bắc.</p>
<p><strong>Cơ quan chỉ đạo</strong></p>
<p>Trung ương Đảng, Chính phủ và Ban Cải cách Ruộng đất Trung ương được thành lập để chỉ đạo toàn bộ quá trình.</p>
<p>Ở các địa phương, các đoàn công tác cải cách ruộng đất (thường gồm cán bộ, bộ đội, đoàn viên thanh niên) được điều về cơ sở để thực hiện.</p>
<p><strong>Cách thức tổ chức</strong></p>
<p><strong>Huấn luyện cán bộ</strong>: hàng vạn cán bộ, chiến sĩ được cử đi học tập chính sách, phương pháp điều tra phân loại nông thôn.</p>
<p><strong>Điều tra xã hội nông thôn</strong>: phân loại các tầng lớp giai cấp (địa chủ, phú nông, trung nông, bần nông, cố nông).</p>
<p><strong>Thành lập tổ chức nông dân</strong>: các đội cải cách ruộng đất làm việc cùng nông dân, thực hiện ba cùng ("cùng ăn, cùng ở, cùng làm") để nắm tình hình và vận động quần chúng.</p>
<p><strong>Tiến hành từng đợt</strong>: 1954–1955 là giai đoạn đẩy mạnh các đợt 3, 4, 5 của cải cách ruộng đất, mở rộng từ vùng tự do sang các tỉnh đồng bằng sau hòa bình lập lại.</p>
<p>=> <strong>Kết quả</strong> triển khai: chỉ trong hai năm, hàng trăm huyện, hàng ngàn xã trong miền Bắc đã được tổ chức chia lại ruộng đất, bước đầu hình thành một cơ cấu nông thôn mới.</p>
<p><strong>Các hình thức thực hiện</strong></p>
<p>Luật Cải cách Ruộng đất năm 1953 quy định <strong>bốn hình thức</strong> thu hồi và phân phối ruộng đất:</p>
<p><strong>Hiến ruộng đất</strong>: Vận động các địa chủ, phú nông có tinh thần yêu nước tự nguyện hiến phần đất thừa cho Nhà nước hoặc nông dân.</p>
<p><strong>Tịch thu</strong>: Nhà nước tịch thu toàn bộ ruộng đất, nhà cửa, trâu bò, nông cụ của thực dân, Việt gian, địa chủ phản động.</p>
<p><strong>Trưng thu</strong>: Thu hồi phần ruộng đất vượt hạn mức mà chủ ruộng không trực tiếp canh tác, để chia cho nông dân.</p>
<p><strong>Trưng mua</strong>: Nhà nước mua lại một phần ruộng đất của các chủ ruộng thuộc diện "không bị tịch thu" để điều hòa ruộng đất trong xã.</p>
<p>Các hình thức này được áp dụng linh hoạt tùy điều kiện từng địa phương, nhằm đảm bảo công bằng và trật tự trong phân chia.</p>
<p><strong>Nguyên tắc phân chia ruộng đất</strong></p>
<p>Việc phân chia ruộng đất được thực hiện theo các <strong>nguyên tắc mang tính giai cấp rõ ràng</strong>:</p>
<p><strong>Ưu tiên cho bần nông, cố nông</strong> — những người không có hoặc thiếu ruộng là lực lượng được chia nhiều nhất.</p>
<p><strong>Chiếu cố trung nông lớp dưới</strong>, tức những hộ trung nông ít ruộng hoặc khó khăn, cũng được chia thêm để ổn định sản xuất.</p>
<p><strong>Địa chủ và phú nông hợp tác</strong>: nếu không có tội, được giữ lại một phần ruộng trong hạn mức và vẫn được hưởng quyền canh tác.</p>
<p><strong>Công bằng, minh bạch</strong>: các xã tổ chức họp công khai danh sách, diện tích, đối tượng được chia; đảm bảo ruộng chia đều, gần nơi cư trú, thuận lợi sản xuất.</p>
<p><strong>Gắn với khôi phục sản xuất</strong>: sau chia ruộng, Nhà nước hỗ trợ trâu bò, nông cụ, thuế nhẹ, khuyến khích sản xuất nông nghiệp.</p>
<p><strong>Mục tiêu</strong> là để <strong>mọi nông dân đều có đất cày cấy</strong>, <strong>củng cố lòng tin</strong> của quần chúng vào <strong>Đảng và Chính phủ</strong>.</p>
<p><strong>Thành tựu đạt được</strong></p>
<p>Theo <strong>thống kê</strong> của <strong>Ban Cải cách Ruộng đất Trung ương</strong> (1956):</p>
<p>Cải cách ruộng đất <strong>hoàn thành cơ bản</strong> vào tháng <strong>7/1956</strong> ở miền Bắc.</p>
<p>Khoảng <strong>810.000 ha</strong> ruộng đất, cùng với <strong>10 vạn trâu bò</strong> và <strong>1,8 triệu nông cụ</strong> được chia lại cho hơn <strong>2 triệu hộ nông dân</strong> (khoảng 9 triệu người).</p>
<p><strong>Xóa bỏ hoàn toàn</strong> chế độ <strong>chiếm hữu ruộng đất phong kiến</strong> — <strong>chấm dứt quyền lực của địa chủ</strong> ở nông thôn.</p>
<p>Hàng vạn <strong>bần nông, cố nông</strong> trở <strong>thành chủ ruộng</strong>, lần đầu tiên có quyền <strong>sở hữu đất hợp pháp</strong>.</p>
<p><strong>Sản xuất nông nghiệp tăng nhanh</strong> trong những năm 1956–1957; năng suất lúa, hoa màu và chăn nuôi đều phục hồi mạnh mẽ.</p>
<p><strong>Tạo nền tảng vững chắc</strong> để miền <strong>Bắc </strong>chuyển sang <strong>cải tạo xã hội chủ nghĩa</strong> sau năm 1958.</p>

<h2><strong>IV. Sai lầm trong cải cách 1956</strong></h2>
<p><strong>Phân tích khái quát về sai lầm trong cải cách ruộng đất 1956</strong></p>
<p>Cải cách ruộng đất (1953–1956) là một chủ trương lớn của Đảng nhằm xóa bỏ giai cấp địa chủ phong kiến, thực hiện người cày có ruộng, góp phần củng cố hậu phương kháng chiến. Tuy nhiên, khi được triển khai, đường lối đúng đắn này đã bị sai lệch trong quá trình thực hiện, dẫn đến những sai lầm nghiêm trọng năm 1956.</p>
<p><strong>Các sai lầm cụ thể được nêu trong tài liệu</strong></p>
<p>Sai lầm về nhận thức và phương pháp</p>
<p><strong>Nguyên nhân chủ yếu</strong>: "<strong>Chủ quan, giáo điều, không xuất phát từ thực tiễn</strong>" — nghĩa là cán bộ cải cách đã <strong>rập khuôn máy móc kinh nghiệm nước ngoài</strong> (Trung Quốc, Liên Xô), <strong>không phù hợp với tình hình giai cấp ở nông thôn Việt Nam</strong> sau khi giải phóngGT học phần Lịch sử Đảng cộng s…</p>
<p>Đảng đã <strong>"cường điệu hóa đấu tranh giai cấp ở nông thôn"</strong>, mở rộng quá mức đối tượng bị quy là địa chủ, phản động, dẫn đến <strong>nhiều vụ xử oan sai, thậm chí xử tử oan</strong>.</p>
<p>Sai lầm trong tổ chức và lãnh đạo</p>
<p>Trong công tác chỉnh đốn tổ chức, Đảng <strong>"đã nhận định sai về tình hình tổ chức cơ sở Đảng ở nông thôn, cho rằng về cơ bản đã bị địch lũng đoạn"</strong>, nên <strong>xử lý oan nhiều cán bộ, đảng viên tốt</strong>.</p>
<p>Phương pháp lãnh đạo <strong>thiếu dân chủ, mang tính mệnh lệnh và áp đặt</strong>, nhiều nơi <strong>sử dụng bạo lực và hình thức đấu tố cực đoan</strong>, gây <strong>tổn thất niềm tin giữa Đảng và nhân dân</strong>.</p>
<p>Hậu quả và công tác sửa sai</p>
<p>Sai lầm này đã "<strong>gây ra một số tổn thất đối với Đảng và quan hệ giữa Đảng với nhân dân</strong>".</p>
<p><strong>Hội nghị Trung ương lần thứ 10 (tháng 9-1956)</strong> đã nghiêm khắc kiểm điểm và <strong>"công khai tự phê bình trước nhân dân"</strong>, đồng thời <strong>thi hành kỷ luật đối với một số Ủy viên Bộ Chính trị và Trung ương Đảng</strong>GT học phần Lịch sử Đảng cộng s….</p>
<p>Công tác <strong>sửa sai</strong> được chỉ đạo "<strong>thành khẩn, kiên quyết, khẩn trương, thận trọng, có kế hoạch chặt chẽ</strong>", giúp từng bước khôi phục niềm tin của quần chúng.</p>
<p><strong>Nguyên nhân sâu xa</strong></p>
<p><strong>Chủ quan, duy ý chí</strong>: Tin rằng đấu tranh giai cấp vẫn gay gắt như thời thuộc địa.</p>
<p><strong>Sao chép mô hình nước ngoài</strong>: Áp dụng máy móc mô hình "đấu tố" kiểu Trung Quốc mà không xem xét đặc điểm xã hội Việt Nam.</p>
<p><strong>Thiếu dân chủ trong thực hiện chính sách</strong>: Quyền lực tập trung vào cán bộ cải cách, dẫn đến <strong>lạm quyền và định kiến giai cấp</strong>.</p>
<p><strong>Thiếu kiểm tra giám sát từ cấp trên</strong>, khiến sai phạm kéo dài và lan rộng.</p>

<h2><strong>V. Hậu quả & Công tác sửa sai</strong></h2>
<p><strong>Trình bày hậu quả và công tác sửa sai</strong></p>
<p><strong>Hậu quả</strong></p>
<p><strong>Về mặt xã hội : </strong></p>
<p>Khiến cho nhân dân mất lòng tin vào Đảng và nhà nước</p>
<p>Tinh thần phấn khởi và lòng tin tưởng cán bộ của quần chúng bị hạn chế</p>
<p>Nhiều người bị quy sai là địa chủ, bị xử bắn hoặc tù đày oan uổng, gây tổn thất lớn về sinh mạng và tinh thần cho nhân dân. Không khí sợ hãi, nghi kỵ và tố cáo lẫn nhau lan rộng khắp nông thôn, làm rạn nứt mối quan hệ gia đình, họ hàng, làng xóm vốn bền chặt từ bao đời.</p>
<p><strong>Về mặt chính trị </strong></p>
<p>Làm cho uy tín của Đảng và Chính phủ bị giảm sút nghiêm trọng</p>
<p>khiến <strong>mối quan hệ giữa Đảng và nhân dân bị rạn nứt</strong>, làm ảnh hưởng đến <strong>khối đại đoàn kết dân tộc</strong>, vốn rất cần thiết trong giai đoạn kháng chiến chống Mỹ sắp tới.</p>
<p>Ngoài ra, Đảng phải <strong>tập trung thời gian và nguồn lực để "sửa sai"</strong>, ảnh hưởng đến tiến trình củng cố chính quyền và các kế hoạch kinh tế – xã hội sau năm 1955.</p>
<p><strong>Về mặt tổ chức Đảng: </strong></p>
<p>Là tổn thất đau đớn nhất .Ngoài những cơ quan chính quyền, tổ chức công an, dân quân du kích và các đoàn thể quần chúng bị giải tán không đúng, có hàng trǎm chi bộ bị giải tán và đǎng ký sai, nhiều đảng viên bị xử trí sai, trong đó có một số có công và được quần chúng mến phục. => Kết quả là trong một thời gian tương đối dài, một số cơ sở của ta ở nông thôn bị tạm thời suy yếu, sự đoàn kết trong nhiều đảng bộ bị tổn thương nặng.</p>
<p><strong>Công tác sửa sai: </strong></p>
<p>Đến khi phát hiện sai lầm, với tinh thần phụ trách trước nhân dân, Đảng ta lại dũng cảm tự phê bình, tìm ra nguyên nhân sai lầm và đề ra phương châm, chính sách và phương pháp sửa sai một cách đúng đắn. Do đó, đã động viên được toàn Đảng tiến hành sửa sai có kết quả tốt, hoàn thành tốt cải cách ruộng đất</p>
<p>Hội nghị Trung ương lần thứ mười (mở rộng) trên những nét lớn, đã vạch rõ phần đúng, phần sai trong cải cách ruộng đất và chỉnh đốn tổ chức, đã phân tích, phê phán những sai lầm và đề ra những phương châm, chính sách và biện pháp sửa chữa. Hội nghị Trung ương lần thứ mười (mở rộng) đã có một tác dụng lớn trong việc cải biến tình hình nghiêm trọng do những sai lầm trong cải cách ruộng đất và chỉnh đốn tổ chức gây ra.</p>
<p>Cơ sở đảng ở nông thôn đã được củng cố và tǎng cường; những đảng viên bị xử trí sai đã được khôi phục đảng tịch; những cán bộ bị xử trí sai đã được khôi phục chức vụ cũ. Các tổ chức chính quyền và quần chúng ở xã cũng được củng cố và kiện toàn thêm. Vai trò của bần, cố nông được nâng cao hơn và bần, cố, trung nông đoàn kết hơn. Những người bị quy sai và xử trí sai trong cải cách ruộng đất đã được sửa thành phần, khôi phục danh dự và đền bù tài sản một cách tương đối thích đáng</p>
<p>đồng thời các lãnh đạo cao nhất trong Ban chỉ đạo Cải cách ruộng đất nhận trách nhiệm về mình và chịu kỷ luật nghiêm. Tổng Bí thư Trường Chinh xin từ chức; ông Hoàng Quốc Việt thôi Ủy viên Bộ Chính trị.</p>
<p>Ông Lê Văn Lương rút khỏi Bộ Chính trị, Ban Bí thư; ông Hồ Viết Thắng ra khỏi Ban Chấp hành Trung ương Đảng…</p>

<h2><strong>VI. Bài học lịch sử</strong></h2>
<p><strong>1. Xuất phát từ thực tiễn, tránh rập khuôn máy móc</strong></p>
<p>Trong cải cách ruộng đất, ta từng máy móc áp dụng mô hình nước ngoài, không phù hợp với bối cảnh Việt Nam, dẫn tới oan sai, chia rẽ nội bộ.</p>
<p>Xử lý nhầm người vô tội: Nhiều địa chủ vừa và nhỏ, thậm chí cán bộ kháng chiến cũ hoặc đảng viên tốt, bị quy sai là "địa chủ phản động", bị đấu tố công khai, tịch thu tài sản, giam giữ hoặc tử hình.</p>
<p>Cường điệu hóa đấu tranh giai cấp: Thay vì phân tích đúng thực tế nông thôn Việt Nam — nơi có nhiều người giàu nhưng yêu nước — cán bộ thực hiện đã máy móc rập khuôn mô hình Trung Quốc, coi "địa chủ = kẻ thù", dẫn đến mở rộng quá mức đối tượng đấu tranh.</p>
<p>Định kiến và chuyên quyền: Một số cán bộ lạm quyền, thiếu hiểu biết chính trị, xử lý bằng cảm tính, theo phong trào, gây nên hàng loạt vụ oan sai nghiêm trọng, đặc biệt ở các vùng trung du và đồng bằng Bắc Bộ.</p>
<p>Ví dụ tiêu biểu (trong tài liệu lịch sử ghi nhận): Có trường hợp cả một gia đình có công kháng chiến nhưng vì có vài sào ruộng cho thuê mà bị quy là địa chủ, bị xử lý oan. Sau này, khi sửa sai, những người bị xử oan được minh oan và phục hồi danh dự.</p>
<p>=> Bài học: Chính sách nào cũng phải xuất phát từ thực tế Việt Nam, từ đời sống người dân. Không thể "copy-paste" kinh nghiệm quốc tế mà không hiểu thực trạng.</p>
<p><strong>2. Dân chủ, minh bạch và tôn trọng người dân</strong></p>
<p>Sai lầm năm 1956 xảy ra một phần vì thiếu dân chủ, cán bộ địa phương lạm quyền, xử lý sai người, sai đối tượng. =>Bài học: Mọi chính sách liên quan đến quyền lợi người dân — đặc biệt là đất đai, tài sản, sinh kế — phải minh bạch, công khai, bảo đảm người dân được tham gia, giám sát và phản hồi. Ví dụ hiện nay: Trong nhiều vụ khiếu nại đất đai như ở Thủ Thiêm (TP.HCM) hay Đại Lải (Vĩnh Phúc), chính quyền các cấp đã phải đối thoại trực tiếp với người dân, nhận sai, và điều chỉnh phương án đền bù. → Đây là minh chứng rõ rằng "đề cao dân chủ, tôn trọng dân" là nguyên tắc không bao giờ lỗi thời.</p>
<p><strong>3. Kiểm tra, giám sát và tự phê bình nghiêm túc</strong> Năm 1956, Hội nghị Trung ương 10 đã công khai tự phê bình, kỷ luật cán bộ sai phạm và tiến hành "sửa sai" rộng khắp — thể hiện tinh thần dám nhận lỗi trước nhân dân. => Bài học: Đảng, Nhà nước và cán bộ công quyền phải chịu trách nhiệm giải trình, thường xuyên kiểm tra, giám sát việc thực hiện chính sách, không để "sai một li đi một dặm".</p>
<p>Ví dụ hiện nay: Các chiến dịch "chỉnh đốn Đảng" và xử lý cán bộ sai phạm trong lĩnh vực quản lý đất đai, quy hoạch (như vụ Vạn Thịnh Phát, AIC, Việt Á) là biểu hiện cụ thể của tinh thần sửa sai và làm trong sạch bộ máy.</p>
<p><strong>4. Kết hợp giữa cải cách kinh tế và phát triển xã hội</strong> Cải cách ruộng đất giúp hàng triệu nông dân "người cày có ruộng", nhưng việc thiếu chuẩn bị về sản xuất, kỹ thuật, hỗ trợ sinh kế khiến nhiều nơi gặp khó sau khi chia đất. => Bài học: Chính sách đất đai không chỉ là chia lại đất, mà phải gắn với đào tạo nghề, hạ tầng, thị trường nông sản, và công nghệ nông nghiệp hiện đại.</p>
<p>Ví dụ thực tế: Các chương trình "xây dựng nông thôn mới nâng cao", "chuyển đổi số trong nông nghiệp", và các mô hình hợp tác xã công nghệ cao ở Đồng Tháp, Lâm Đồng đang kế thừa tinh thần "người cày có ruộng" nhưng theo hướng người nông dân có quyền, có kiến thức và có lợi ích bền vững.</p>

<h2><strong>VII. Liên hệ với chính sách đất đai, nông thôn hiện nay</strong></h2>
<p>Luật Đất đai (2024) nhấn mạnh nguyên tắc: "Đất đai thuộc sở hữu toàn dân, do Nhà nước đại diện quản lý, vì lợi ích của nhân dân."</p>
<p>Các chính sách đền bù, tái định cư, chuyển đổi mục đích đất nông nghiệp, hiện nay được yêu cầu công khai, giám sát cộng đồng, nhằm tránh tái diễn sai lầm như thời kỳ 1953–1956.</p>
<p>Chương trình Nông thôn mới giai đoạn 2021–2025 không chỉ tập trung vào cơ sở hạ tầng mà còn nâng cao chất lượng đời sống tinh thần, văn hóa, dân chủ cơ sở – kế thừa tinh thần "vì dân, do dân" từ bài học lịch sử.</p>

<h2><strong>VIII. Kết luận</strong></h2>
<p>Cải cách ruộng đất là một bước ngoặt lịch sử, mang ý nghĩa giải phóng nông dân và khơi dậy tinh thần độc lập dân tộc. Nhưng sai lầm năm 1956 cũng để lại bài học sâu sắc về tư duy duy ý chí, giáo điều và xa rời thực tiễn. Ngày nay, khi xây dựng chính sách đất đai mới và phát triển nông thôn hiện đại, bài học ấy vẫn vang vọng:</p>
<p>"Phải dựa vào dân, tôn trọng dân, lắng nghe dân — vì nhân dân là gốc của mọi chính sách thành công."</p>
`;

// Mapping 8 đầu mục → ID + NAV
const SECTION_MAPPING = {
    'Mở đầu & Bối cảnh': { id: 'mo-dau-boi-canh', label: 'Bối cảnh' },
    'II. Chính sách 1953': { id: 'chinh-sach-1953', label: '1953' },
    'III. Chính sách triển khai 1954–1955': { id: 'trien-khai-1954-1955', label: '1954–55' },
    'IV. Sai lầm trong cải cách 1956': { id: 'sai-lam-1956', label: 'Sai lầm 1956' },
    'V. Hậu quả & Công tác sửa sai': { id: 'hau-qua-sua-sai', label: 'Sửa sai' },
    'VI. Bài học lịch sử': { id: 'bai-hoc-lich-su', label: 'Bài học' },
    'VII. Liên hệ với chính sách đất đai, nông thôn hiện nay': { id: 'lien-he-hien-nay', label: 'Hiện nay' },
    'VIII. Kết luận': { id: 'ket-luan', label: 'Kết luận' }
};

// Asset Manifest (build-time)
const ASSET_MANIFEST = [
    {
        file: "30da43bac67c44079328641450f2dd3a_result.jpeg",
        title: "Bối cảnh 1954",
        caption: "Miền Bắc sau giải phóng",
        tags: ["boi-canh", "1954", "hero", "banner"],
        placement: "hero",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 1920,
        heightHint: 1080,
        ratio: 16/9
    },
    {
        file: "Cai_cach_ruong_dat5.jpg",
        title: "Cải cách ruộng đất",
        caption: "Quá trình cải cách ruộng đất tại miền Bắc",
        tags: ["ccrd", "1953", "banner", "figure"],
        placement: "banner",
        credit: "Tư liệu lịch sử",
        widthHint: 1200,
        heightHint: 400,
        ratio: 3/1
    },
    {
        file: "cai-cach-ruong-dat-1954-tai-cac-tinh-mien-bac.jpg",
        title: "Triển khai 1954-1955",
        caption: "Cải cách ruộng đất tại các tỉnh miền Bắc",
        tags: ["1954", "1955", "trien-khai", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    },
    {
        file: "cai-cach-ruong-dat-doisongphapluat-17.jpg",
        title: "Luật CCRD 1953",
        caption: "Văn bản Luật Cải cách ruộng đất 1953",
        tags: ["1953", "luat", "197-sl", "figure"],
        placement: "figure",
        credit: "Nguồn: Đời sống pháp luật",
        widthHint: 600,
        heightHint: 800,
        ratio: 3/4
    },
    {
        file: "caicachruongdat.jpg",
        title: "Chính sách 1953",
        caption: "Tài liệu về chính sách cải cách ruộng đất",
        tags: ["1953", "chinh-sach", "banner"],
        placement: "banner",
        credit: "Tư liệu lịch sử",
        widthHint: 1200,
        heightHint: 400,
        ratio: 3/1
    },
    {
        file: "cthcm-cuoi-195321102023104648.jpg",
        title: "Chủ tịch Hồ Chí Minh",
        caption: "Chủ tịch Hồ Chí Minh cuối năm 1953",
        tags: ["hcm", "1953", "leader", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 600,
        heightHint: 800,
        ratio: 3/4
    },
    {
        file: "dieuhanhchaomung_caicach.jpg",
        title: "Điều hành chào mừng",
        caption: "Lễ chào mừng cải cách ruộng đất",
        tags: ["dau-to", "sai-lam", "figure"],
        placement: "figure",
        credit: "Tư liệu lịch sử",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    },
    {
        file: "hcm_di_tham.jpg",
        title: "Hồ Chí Minh đi thăm",
        caption: "Chủ tịch Hồ Chí Minh đi thăm nông dân",
        tags: ["hcm", "tham", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 600,
        heightHint: 400,
        ratio: 3/2
    },
    {
        file: "HQPD_1381178844.jpg",
        title: "Hậu quả và sửa sai",
        caption: "Công tác sửa sai sau cải cách ruộng đất",
        tags: ["sua-sai", "hoi-nghi-10", "banner"],
        placement: "banner",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 1200,
        heightHint: 400,
        ratio: 3/1
    },
    {
        file: "MXVQHAVVRRAMOYHDRW2CE2H6XA.jpg",
        title: "Bài học lịch sử",
        caption: "Rút ra bài học từ cải cách ruộng đất",
        tags: ["bai-hoc", "lesson", "figure"],
        placement: "figure",
        credit: "Tư liệu lịch sử",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    },
    {
        file: "Screenshot 2025-10-18 164552.png",
        title: "Hiện nay",
        caption: "Chính sách đất đai hiện tại",
        tags: ["hien-nay", "today", "luat-dat-dai", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu hiện đại",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    },
    {
        file: "trial-of-a-bourgeois-landowner-in-north-vietnam-1955_5125225272_o_result.jpg",
        title: "Phiên đấu tố 1955",
        caption: "Phiên đấu tố địa chủ tại miền Bắc 1955",
        tags: ["dau-to", "sai-lam", "1955", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    },
    {
        file: "trial-of-a-bourgeois-landowner-in-north-vietnam-1955---u-t-a-ch-ti-bc-vit_5124618507_o_result (1).jpg",
        title: "Đấu tố địa chủ",
        caption: "Phiên đấu tố địa chủ tại miền Bắc",
        tags: ["dau-to", "sai-lam", "figure"],
        placement: "figure",
        credit: "Nguồn: Tư liệu lịch sử",
        widthHint: 800,
        heightHint: 600,
        ratio: 4/3
    }
];

// Khởi tạo ứng dụng
document.addEventListener('DOMContentLoaded', function() {
    render();
    
    // Cleanup: Loại bỏ copy buttons & wrapper thừa
    cleanupContent();
    
    // Chuẩn hóa tiêu đề & chia mục tự động
    normalizeHeadings();
    
    // Tích hợp ảnh vào các mục
    mountImages();
    
    buildTOC();
    setupNavigation();
    observeAnimations();
    setupFloatingButtons();
    setBuildDate();
    
    // Kiểm thử logic
    validateContent();
});

// Render nội dung
function render() {
    document.querySelector('#content').innerHTML = SOURCE_CONTENT;
}

// Cleanup: Loại bỏ copy buttons & wrapper thừa
function cleanupContent() {
    // 1) Xoá mọi nút copy
    document.querySelectorAll('.copy-btn').forEach(el => el.remove());
    
    // 2) Bỏ wrapper .evidence nhưng giữ chữ
    document.querySelectorAll('span.evidence').forEach(sp => {
        const txt = sp.textContent;
        const textNode = document.createTextNode(txt);
        sp.replaceWith(textNode);
    });
    
    // 3) Bỏ inline style lẻ: scroll-margin-top… khỏi H2/H3/P
    document.querySelectorAll('[style]').forEach(el => {
            el.removeAttribute('style');
    });
}

// Chuẩn hóa tiêu đề & chia mục tự động
function normalizeHeadings() {
    const content = document.getElementById('content');
    
    // Chỉ xử lý các h2 đã có sẵn trong SOURCE_CONTENT, không tạo thêm
    const existingH2s = content.querySelectorAll('h2');
    
    // Mapping cho 8 sections chính
    const sectionMapping = [
        { id: 'mo-dau-boi-canh', title: 'Mở đầu & Bối cảnh' },
        { id: 'chinh-sach-1953', title: 'II. Chính sách 1953' },
        { id: 'trien-khai-1954-1955', title: 'III. Chính sách triển khai 1954–1955' },
        { id: 'sai-lam-1956', title: 'IV. Sai lầm trong cải cách 1956' },
        { id: 'hau-qua-sua-sai', title: 'V. Hậu quả & Công tác sửa sai' },
        { id: 'bai-hoc-lich-su', title: 'VI. Bài học lịch sử' },
        { id: 'lien-he-hien-nay', title: 'VII. Liên hệ với chính sách đất đai, nông thôn hiện nay' },
        { id: 'ket-luan', title: 'VIII. Kết luận' }
    ];
    
    // Chỉ xử lý 8 h2 đầu tiên và gán class/id
    existingH2s.forEach((h2, index) => {
        if (index < 8) {
            h2.className = 'h-level-1';
            if (sectionMapping[index]) {
                h2.id = sectionMapping[index].id;
            }
        }
    });
    
    // Tạo section cards cho 8 h2 chính
    const mainH2s = content.querySelectorAll('h2.h-level-1');
    mainH2s.forEach((h2, i) => {
        if (i < 8) {
        const section = document.createElement('section');
            section.className = 'section-card level-1';
            section.id = sectionMapping[i].id;
            
            // Di chuyển h2 và nội dung vào section
            h2.parentNode.insertBefore(section, h2);
            section.appendChild(h2);
            
            // Di chuyển các element tiếp theo vào section cho đến khi gặp h2 tiếp theo
            let nextSibling = section.nextSibling;
            while (nextSibling && !(nextSibling.tagName === 'H2' && nextSibling.classList.contains('h-level-1'))) {
                const toMove = nextSibling;
                nextSibling = nextSibling.nextSibling;
                section.appendChild(toMove);
            }
        }
    });
    
    // Xử lý h3 cho các tiểu mục
    const h3Keywords = [
        'Bối cảnh', 'Lý do', 'Dàn ý', 'Hội nghị', 'Cương lĩnh', 'Giảm tô', 'Nguyên tắc',
        'Kết quả', 'Thành tựu', 'Hậu quả', 'Nguyên nhân', 'Công tác sửa sai', 'Mục tiêu',
        'Cơ quan chỉ đạo', 'Cách thức tổ chức'
    ];
    
    // Tìm và chuyển đổi các element thành h3
    content.querySelectorAll('p, strong, em').forEach(el => {
        const text = el.textContent.trim();
        if (h3Keywords.some(keyword => text.startsWith(keyword))) {
            const h3 = document.createElement('h3');
            h3.className = 'h-level-2';
            h3.textContent = text.replace(/^\d*\.*\s*/, '');
            el.replaceWith(h3);
        }
    });
    
    // Wrap nội dung sau h3 vào level-2
    content.querySelectorAll('h3.h-level-2').forEach(h3 => {
        const wrapper = document.createElement('div');
        wrapper.className = 'level-2';
        
        let nextSibling = h3.nextSibling;
        while (nextSibling && !(nextSibling.tagName === 'H3' || nextSibling.tagName === 'H2')) {
            const toMove = nextSibling;
            nextSibling = nextSibling.nextSibling;
            wrapper.appendChild(toMove);
        }
        
        h3.parentNode.insertBefore(wrapper, nextSibling);
    });
}

// Gán ID cho các section (đã được xử lý trong normalizeHeadings)
function assignSectionIDs() {
    // Function này đã được tích hợp vào normalizeHeadings()
    return;
}

// Tạo mục lục
function buildTOC() {
    const tocList = document.getElementById('toc-list');
    const h2Elements = document.querySelectorAll('#content h2.h-level-1');
    
    if (!tocList) {
        console.error('Không tìm thấy #toc-list');
        return;
    }
    
    tocList.innerHTML = '';
    
    // Chỉ lấy 8 h2 chính
    const mainH2s = Array.from(h2Elements).slice(0, 8);
    
    mainH2s.forEach((h2, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        
        a.href = `#${h2.id}`;
        a.textContent = h2.textContent.trim();
        a.className = 'toc-link';
        a.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScrollTo(h2.id);
        });
        
        li.appendChild(a);
        tocList.appendChild(li);
    });
}

// Smooth scroll
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navigation setup
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const tocLinks = document.querySelectorAll('#toc-list a');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active link highlighting
    function updateActiveSection() {
        const sections = document.querySelectorAll('#content h2[id]');
        let currentSection = '';
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100) {
                currentSection = section.id;
            }
        });
        
        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
        
        // Update TOC links
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveSection);
    updateActiveSection();
}

// Animation observer
function observeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

// Floating buttons
function setupFloatingButtons() {
    const backToTop = document.getElementById('back-to-top');
    const toggleToc = document.getElementById('toggle-toc');
    const toc = document.getElementById('toc');
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    toggleToc.addEventListener('click', () => {
        toc.classList.toggle('hidden');
    });
    
    // Show/hide back to top button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
}

// Set build date
function setBuildDate() {
    const buildDate = new Date().toLocaleDateString('vi-VN');
    document.getElementById('build-date').textContent = buildDate;
}

// Scroll to section function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Helper functions cho ảnh
function toAlt(item) {
    return item?.title || item?.caption || item?.file.replace(/[_-]/g, ' ').replace(/\..+$/, '');
}

function makeFigure(item, role) {
    if (!item) return null;
    
    const fig = document.createElement('figure');
    fig.className = `figure ${role}` + (role === 'figure' && item.ratio > 1.2 ? ' figure-43' : '');
    
    const img = document.createElement('img');
    img.src = `https://github.com/huytran2810-tech/VNRG2/blob/main/assets/images/ccrd/${item.file}`;
    img.alt = toAlt(item);
    img.loading = 'lazy';
    img.decoding = 'async';
    if (item.widthHint) img.setAttribute('width', item.widthHint);
    if (item.heightHint) img.setAttribute('height', item.heightHint);
    img.className = 'img ' + role;
    
    const cap = document.createElement('figcaption');
    cap.textContent = item.title ? (item.credit ? `${item.title} — ${item.credit}` : item.title) : (item.credit || '');
    
    fig.append(img, cap);
    return fig;
}

function pickImage(sectionId, role, fallbackTags = []) {
    const sectionMapping = {
        'mo-dau-boi-canh': ['boi-canh', 'context', '1954'],
        'chinh-sach-1953': ['1953', 'luat', '197-sl', 'giam-to'],
        'trien-khai-1954-1955': ['1954', '1955', 'trien-khai'],
        'sai-lam-1956': ['sai-lam', 'oan-sai', 'dau-to'],
        'hau-qua-sua-sai': ['sua-sai', 'hoi-nghi-10', 'khac-phuc'],
        'bai-hoc-lich-su': ['bai-hoc', 'lesson'],
        'lien-he-hien-nay': ['hien-nay', 'today', 'luat-dat-dai'],
        'ket-luan': ['ket-luan', 'summary']
    };
    
    const sectionTags = sectionMapping[sectionId] || [];
    const allTags = [...sectionTags, ...fallbackTags];
    
    // Lọc theo placement và tags
    let candidates = ASSET_MANIFEST.filter(item => {
        if (item.placement !== role) return false;
        return allTags.some(tag => item.tags.includes(tag));
    });
    
    // Nếu không tìm thấy theo placement, thử fallback
    if (candidates.length === 0) {
        candidates = ASSET_MANIFEST.filter(item => {
            if (role === 'banner' && item.placement === 'figure') return false;
            return allTags.some(tag => item.tags.includes(tag));
        });
    }
    
    // Ưu tiên theo size hint
    if (candidates.length > 0) {
        candidates.sort((a, b) => {
            const aSize = a.widthHint * a.heightHint;
            const bSize = b.widthHint * b.heightHint;
            return bSize - aSize;
        });
        return candidates[0];
    }
    
    return null;
}

// Ghép ảnh cho từng mục
function mountImages() {
    const sections = [
        ['mo-dau-boi-canh', ['boi-canh', 'context', '1954']],
        ['chinh-sach-1953', ['1953', 'luat', '197-sl', 'giam-to']],
        ['trien-khai-1954-1955', ['1954', '1955', 'trien-khai']],
        ['sai-lam-1956', ['sai-lam', 'oan-sai', 'dau-to']],
        ['hau-qua-sua-sai', ['sua-sai', 'hoi-nghi-10', 'khac-phuc']],
        ['bai-hoc-lich-su', ['bai-hoc', 'lesson']],
        ['lien-he-hien-nay', ['hien-nay', 'today', 'luat-dat-dai']],
        ['ket-luan', ['ket-luan', 'summary']]
    ];
    
    sections.forEach(([id, tags]) => {
        const sec = document.getElementById(id);
        if (!sec) return;
        
        // Banner ngay dưới H2
        const h2 = sec.querySelector('h2.h-level-1') || sec.querySelector('h2');
        const banner = pickImage(id, 'banner', tags) || pickImage(id, 'figure', tags);
        if (h2 && banner) {
            const fig = makeFigure(banner, 'banner');
            h2.insertAdjacentElement('afterend', fig);
        }
        
        // Figure đầu tiên cho H3
        const h3 = sec.querySelector('h3.h-level-2, h3');
        const figItem = pickImage(id, 'figure', tags) || pickImage(id, 'inline', tags);
        if (h3 && figItem) {
            const wrap = h3.nextElementSibling?.classList.contains('level-2') ? h3.nextElementSibling : sec;
            const fig = makeFigure(figItem, 'figure');
            wrap.prepend(fig);
        }
    });
    
    // Cập nhật hero nếu có ảnh hero
    const heroImage = ASSET_MANIFEST.find(item => item.placement === 'hero' || item.tags.includes('hero'));
    if (heroImage) {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            const heroImg = document.createElement('img');
            heroImg.src = `/assets/images/ccrd/${heroImage.file}`;
            heroImg.alt = toAlt(heroImage);
            heroImg.className = 'hero-bg';
            heroImg.loading = 'eager';
            heroSection.style.backgroundImage = `url(/assets/images/ccrd/${heroImage.file})`;
            heroSection.style.backgroundSize = 'cover';
            heroSection.style.backgroundPosition = 'center';
        }
    }
}

// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Kiểm thử logic
function validateContent() {
    const h2Elements = document.querySelectorAll('#content h2.h-level-1');
    const requiredIds = [
        'mo-dau-boi-canh', 'chinh-sach-1953', 'trien-khai-1954-1955',
        'sai-lam-1956', 'hau-qua-sua-sai', 'bai-hoc-lich-su',
        'lien-he-hien-nay', 'ket-luan'
    ];
    
    // Kiểm tra số lượng h2
    if (h2Elements.length !== 8) {
        console.error(`Thiếu mục I–VIII: kiểm tra lại phân tích DOCX. Tìm thấy ${h2Elements.length} h2 thay vì 8.`);
        return false;
    }
    
    // Kiểm tra các ID
    const missingIds = requiredIds.filter(id => !document.getElementById(id));
    if (missingIds.length > 0) {
        console.error(`Thiếu các ID: ${missingIds.join(', ')}`);
        return false;
    }
    
    // Kiểm tra chiều cao tối thiểu và đảm bảo scroll margin
    h2Elements.forEach(h2 => {
        const section = h2.parentElement;
        if (section.offsetHeight < 200) {
            section.style.minHeight = '200px';
        }
        
        // Đảm bảo scroll margin cho anchor
        h2.style.scrollMarginTop = '100px';
    });
    
    // Kiểm tra TOC có đủ 8 mục
    const tocLinks = document.querySelectorAll('#toc-list a');
    if (tocLinks.length !== 8) {
        console.warn(`TOC có ${tocLinks.length} mục thay vì 8`);
    }
    
    console.log('✅ Kiểm thử logic thành công - có đúng 8 h2 và tất cả ID');
    return true;
}


// Evidence highlighting và copy buttons đã được loại bỏ

