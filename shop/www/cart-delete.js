//�������� ������
        $('.btn-del').click(function () { //���� �� ������     
        var id = $(this).attr('id'); //�������� id ������
            $.ajax({//����-������
            type: "POST",//�����
            url: 'cartdel.php',//���� ��������
            data: {id_tov: id},//������
            success: function(data) {//�������� ���������
                    //��� ����� ����������� �����
                    $('tr#'+id).css('display', 'none');//�������� ������ �������
                }
            });
        });