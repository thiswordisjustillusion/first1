    $('.btn-buy').click(function () {//���� �� ������
        var id = $(this).attr('id'); //�������� id ���� ������
            $.ajax({//�������� ajax-�������� ������
            type: "POST", //����� �������� ������
            url: '/addtocart.php',//php-���� ��� ��������� ������
            data: {id_tov: id},//�������� ���� ������
            success: function(data) {
                
            }
            });
    });